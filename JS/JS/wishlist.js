let completedCount = 0;

function markAsRead(button) {
  const card = button.parentElement;
  const status = card.querySelector(".status");
  const progress = card.querySelector(".progress");

  status.textContent = "Finished";
  progress.style.width = "100%";
  button.textContent = "Completed";
  button.disabled = true;

  card.setAttribute("data-status", "finished");

  completedCount++;
  document.getElementById("read-count").textContent = completedCount;

  alert("✨ You’ve completed this book! Great job!");
}

// Scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute("data-delay") || 0;
        setTimeout(() => {
          entry.target.classList.add("show");
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".wishlist-card").forEach(card => observer.observe(card));

  // Quote of the day
  const quotes = [
    "“A reader lives a thousand lives before he dies.”",
    "“Books are uniquely portable magic.”",
    "“So many books, so little time.”",
    "“Reading is dreaming with open eyes.”"
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-of-the-day").textContent = randomQuote;
});

function filterBooks() {
  const filter = document.getElementById("filter").value;
  const cards = document.querySelectorAll(".wishlist-card");

  cards.forEach(card => {
    const status = card.getAttribute("data-status");
    if (filter === "all" || filter === status) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function resetAll() {
  const cards = document.querySelectorAll('.wishlist-card');
  cards.forEach(card => {
    const status = card.querySelector('.status');
    const progress = card.querySelector('.progress');
    const button = card.querySelector('.wishlist-btn');

    status.textContent = "Not started";
    progress.style.width = "0%";
    button.textContent = "Mark as Read";
    button.disabled = false;
  });
}

