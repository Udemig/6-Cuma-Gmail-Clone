//! importlar (diğer js dosyasında gelen değişken ve fonksiyonlar)
import { months } from './constants.js';
import { renderMails, showModal } from './ui.js';

// localstorage'dan veri alma
const strMailData = localStorage.getItem('data');
// gelen string veriyi obje ve dizileri çevirme
const mailData = JSON.parse(strMailData);

//! HTML'den gelenler
const hamburgerMenu = document.querySelector('.menu');
const navigation = document.querySelector('nav');
const mailsArea = document.querySelector('.mails-area');
const createMailBtn = document.querySelector('.create-mail');
const closeMailBtn = document.querySelector('#close-btn');
const modal = document.querySelector('.modal-wrapper');
const form = document.querySelector('#create-mail-form');

//! Olay İzleyicleri
// ekranın yüklnme anında çalışır
document.addEventListener('DOMContentLoaded', () =>
  renderMails(mailsArea, mailData)
);
hamburgerMenu.addEventListener('click', handleMenu);
// modal işlemleri
createMailBtn.addEventListener('click', () => showModal(modal, true));
closeMailBtn.addEventListener('click', () => showModal(modal, false));
form.addEventListener('submit', sendMail);

//! Fonksiyonlar
// Navigasyonu açıp kapamaya yarayan fonksiyon
// Hamburger menüsüne tıklanınca çalışır
function handleMenu() {
  /*
     classList.toggle():
     * ona parametre olrak verdiğimiz class
     * yoksa ekler varsa çıkarır
    */
  navigation.classList.toggle('hide');
}

// tarih oluşturan fonksiyon
function getDate() {
  // bugünün tarihini alma
  const dateArr = new Date().toLocaleDateString().split('/');
  // tarih dizisinden günü alma
  const day = dateArr[0];
  // tarih diizisnde kaçıncı ayda olduğumuz bilgisini alma
  const monthNumber = dateArr[1];
  // ayın sırasına karşılık gelen ismi tanımladık
  const month = months[monthNumber - 1];
  // fonksiyonun çağrıldığı yere gönderilcek cevap
  return day + ' ' + month;
}

function sendMail(e) {
  // sayfanın yenilenmesini engelleme
  e.preventDefault();

  // formun içerisinde yer alan inputların
  // değerlerine erişme
  const receiver = e.target[0].value;
  const title = e.target[1].value;
  const message = e.target[2].value;

  // yeni mail objesi oluşturma
  const newMail = {
    id: new Date().getTime(),
    sender: 'Furkan',
    receiver,
    title,
    message,
    date: getDate(),
  };

  // oluştudupğumuz objeyi dizinin başına ekleme
  mailData.unshift(newMail);

  //Todo veritabanını(localstorage) güncelle
  // storage'a gönderimek için string'e çeviriyoruz
  const strData = JSON.stringify(mailData);
  // storeage'a gönderme
  localStorage.setItem('data', strData);

  // ekranı güncelle
  renderMails(mailsArea, mailData);

  // modalı kapat
  showModal(modal, false);

  // modal'ı temizle
  e.target[0].value = ' ';
  e.target[1].value = ' ';
  e.target[2].value = ' ';
}
