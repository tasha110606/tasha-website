// JavaScript Document

// AUTO SLIDER
let currentIndex = 0;

function slideCarousel() {
  const carousel = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.carousel-track img');
  const imageWidth = images[0].clientWidth + 20;

  currentIndex = (currentIndex + 1) % images.length;
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

setInterval(slideCarousel, 2000);

// BUTTON LINK
document.getElementById("startBtn").addEventListener("click", function () {
  window.location.href = "about me.html";
});

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

const cards = document.querySelectorAll('.author-card');
cards.forEach(card => observer.observe(card));

// SCROLL ANIMATION UNTUK FIRST BOOK
const observerFirstBook = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.animate-left, .animate-right').forEach(el => {
  observerFirstBook.observe(el);
});

