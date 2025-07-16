function createPetal() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('petal-wrapper');

  const petal = document.createElement('div');
  petal.classList.add('petal');

  // Posisi rawak dari kiri
  wrapper.style.left = Math.random() * 100 + 'vw';

  // Durasi animasi rawak
  const fallDuration = 3 + Math.random() * 2; // lebih laju
  const swayDuration = 2 + Math.random() * 2;

  // Betulkan template string dengan backtick
  wrapper.style.animationDuration = `${swayDuration}s`;
  petal.style.animationDuration = `${fallDuration}s`;

  wrapper.appendChild(petal);
  document.body.appendChild(wrapper);

  // Hapuskan selepas tamat animasi jatuh
  setTimeout(() => {
    wrapper.remove();
  }, fallDuration * 1000);
}

// Setiap 250ms kelopak baru muncul
setInterval(createPetal, 250);

// Fungsi tukar halaman bila klik
function goToNextPage() {
  window.location.href = "homepage2.html"; // Pastikan fail ini wujud
}
