const BODY = document.body;
const NAVBAR = document.querySelector('.navbar');
const THEME_KEY = 'theme';
const NAVBAR_THEME_KEY = 'navbarTheme';

const getSelectedTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  return savedTheme === 'dark' ? savedTheme : 'light';
};

const setThemeOnLoad = () => {
  const selectedTheme = getSelectedTheme();
  setTheme(selectedTheme);
};

const setTheme = (selectedTheme) => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkMode = prefersDarkMode.matches;
  const theme = selectedTheme === 'auto' ? (isDarkMode ? 'dark' : 'light') : selectedTheme;
  BODY.setAttribute('data-bs-theme', theme);
  NAVBAR.setAttribute('data-bs-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  localStorage.setItem(NAVBAR_THEME_KEY, theme);
  setThemeOnPrefersDarkModeChange(theme);
};

const setThemeOnPrefersDarkModeChange = (theme) => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  prefersDarkMode.addEventListener('change', (event) => {
    const newTheme = event.matches ? 'dark' : 'light';
    setTheme(newTheme);
  });
};

const initThemeToggle = () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const selectedTheme = savedTheme || getSelectedTheme();
  setTheme(selectedTheme);
};

document.addEventListener('DOMContentLoaded', initThemeToggle);