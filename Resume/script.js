// Theme Toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = 
    document.body.classList.contains('dark-mode') 
    ? 'Light Mode ☀️' 
    : 'Dark Mode 🌙';
});

// Scroll Animation for Sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.animation = 'fadeIn 1s ease forwards';
    }
  });
});
