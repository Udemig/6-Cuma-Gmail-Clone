// HTML'den gelenler
const hamburgerMenu = document.querySelector('.menu');
const navigation = document.querySelector('nav');

// Olay İzleyicleri
hamburgerMenu.addEventListener('click', handleMenu);

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

function topla(a, b) {
  const toplam = a + b;

  let cıkarma = a - b - a;

  let metin2 = 'asdasd';
  // eğerki fonksiyonun sonucunu farklı
  // bir yerde kullanmak istiyorsak
  // o zaman return satı ile sonucu göndermemiz
  return toplam;
}

const metin = `Bugün 2 farklı vardiyada toplam ${topla(
  10,
  5
)} saat çalıştım`;

console.log(metin);
