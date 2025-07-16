document.addEventListener('DOMContentLoaded', () => {
  // Dropdowns
document.querySelectorAll(".dropdown-btn").forEach(button => {
  button.addEventListener("click", () => {
    const dropdown = button.parentElement;
    dropdown.classList.toggle("open");
  });
});

  // Lightbox
  const bookImage = document.getElementById('book-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close-btn');

  bookImage.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = bookImage.src;
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Translate Dropdown
  const toggleBtn = document.getElementById("translateToggle");
  const menu = document.getElementById("languageMenu");
  const textBox = document.getElementById("aboutText");

  const translations = {
    English: "Hayla and Kiff come from elite families and their marriage was arranged...",
    Malay: "Hayla dan Kiff berasal dari golongan elit dan perkahwinan mereka sudah diatur...",
    Chinese: "海拉和基夫来自上层阶级，婚姻是安排好的...",
    Tamil: "ஹய்லா மற்றும் கிஃப் உயர்ந்த குடும்பங்களைச் சேர்ந்தவர்கள்...",
    Japanese: "ハイラとキフは上流階級出身で、結婚は取り決められていた...",
    Korean: "헤일라와 키프는 상류층 출신이며 결혼은 이미 정해져 있었다..."
  };

  // Make sure the menu is hidden by default when the page loads
  menu.style.display = "none"; // Hide the dropdown menu initially

  // Toggle dropdown when translate icon is clicked
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();  // Prevent the click from propagating to the document
    menu.style.display = menu.style.display === "block" ? "none" : "block"; // Toggle visibility
  });

  // Change the text content based on language selection
  document.querySelectorAll("#languageMenu li").forEach((item) => {
    item.addEventListener("click", () => {
      const selected = item.textContent.trim();
      if (translations[selected]) {
        textBox.innerHTML = `<p>${translations[selected]}</p>`;
      }
      menu.style.display = "none"; // Hide menu after selection
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener("click", () => {
    menu.style.display = "none"; // Hide the dropdown menu
  });

  // Prevent the dropdown from closing when clicking inside the menu
  menu.addEventListener("click", (e) => {
    e.stopPropagation();  // Prevent closing dropdown when clicking inside
  });
});
