function setTheme(theme) {
  const body = document.body;
  body.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);
  const navbar = document.querySelector('.navbar');
  navbar.setAttribute('data-bs-theme', theme);
  localStorage.setItem('navbarTheme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const defaultTheme = savedTheme === 'dark' ? savedTheme : 'light';

  setTheme(defaultTheme);
});