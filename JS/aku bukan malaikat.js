document.addEventListener('DOMContentLoaded', () => {
  // Toggle dropdowns
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(drop => {
    const btn = drop.querySelector('.dropdown-btn');
    btn.addEventListener('click', () => {
      drop.classList.toggle('active');
    });
  });

  // Lightbox setup
  const galleryImages = document.querySelectorAll('.gallery-img'); // banyak gambar
  const mainImage = document.getElementById('book-img'); // gambar utama
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close-btn');

  // Optional: next/prev buttons kalau ada
  const nextBtn = document.querySelector('.lightbox-next');
  const prevBtn = document.querySelector('.lightbox-prev');

  // Gabungkan semua gambar dalam satu array (gambar utama + gallery)
  const allImages = [mainImage, ...galleryImages];
  let currentIndex = 0;

  allImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  // Tutup lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Klik luar gambar untuk tutup
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Optional: next/prev kalau ada
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % allImages.length;
      lightboxImg.src = allImages[currentIndex].src;
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
      lightboxImg.src = allImages[currentIndex].src;
    });
  }
});
