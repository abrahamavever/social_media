document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  const defaultTheme = savedTheme === 'dark' ? savedTheme : 'light';

  function setTheme(theme) {
    body.setAttribute('data-bs-theme', theme);
    themeToggle.textContent = theme === 'light' ? 'Dark theme' : 'Light theme';
    localStorage.setItem('theme', theme);
    const navbar = document.querySelector('.navbar');
    navbar.setAttribute('data-bs-theme', theme);
    localStorage.setItem('navbarTheme', theme);
  }

  function toggleTheme() {
    const currentTheme = body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  themeToggle.addEventListener('click', toggleTheme);

  setTheme(defaultTheme);
});