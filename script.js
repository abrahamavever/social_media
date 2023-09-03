window.addEventListener('load', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = savedTheme === 'dark-theme' ? savedTheme : 'light-theme';
  
    body.classList.add(defaultTheme);
    body.classList.remove(defaultTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  
    themeToggle.textContent = defaultTheme === 'light-theme' ? 'Tema oscuro' : 'Tema claro';
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-theme');
      body.classList.toggle('dark-theme');
  
      const newTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
      themeToggle.textContent = newTheme === 'light-theme' ? 'Tema oscuro' : 'Tema claro';
      localStorage.setItem('theme', newTheme);
    });
  });
  