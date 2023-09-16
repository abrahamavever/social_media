document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  const defaultTheme = savedTheme === 'dark-theme' ? savedTheme : 'light-theme';

  function setTheme(theme) {
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(theme);
    themeToggle.textContent = theme === 'light-theme' ? 'Tema oscuro' : 'Tema claro';
    localStorage.setItem('theme', theme);
    const navbar = document.querySelector('.navbar');
    navbar.setAttribute('data-bs-theme', theme === 'light-theme' ? 'light' : 'dark');
    localStorage.setItem('navbarTheme', theme);
  }

  function toggleTheme() {
    const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
  }

  themeToggle.addEventListener('click', toggleTheme);

  setTheme(defaultTheme);
});