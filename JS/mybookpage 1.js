// JavaScript Document

// script.js
document.querySelectorAll('.book img').forEach(img => {
  const originalSrc = img.getAttribute('src');
  const hoverSrc = img.getAttribute('data-alt');

  img.addEventListener('mouseenter', () => {
    img.setAttribute('src', hoverSrc);
  });

  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', originalSrc);
  });
});

