function setTheme(theme) {
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  const defaultTheme = savedTheme === 'dark' ? savedTheme : 'light';

  if (theme === 'auto') {
    if (window.matchMedia) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
      prefersDarkMode.addEventListener('change', event => {
        const newTheme = event.matches ? 'dark' : 'light';
        body.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        const navbar = document.querySelector('.navbar');
        navbar.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('navbarTheme', newTheme);
      });
    }
  } else {
    body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    const navbar = document.querySelector('.navbar');
    navbar.setAttribute('data-bs-theme', theme);
    localStorage.setItem('navbarTheme', theme);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const defaultTheme = savedTheme === 'dark' ? savedTheme : 'light';

  setTheme(defaultTheme);
});