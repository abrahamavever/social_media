function setTheme(theme) {
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;
  switch (theme) {
    case "light":
      themeIcon.className = "bi bi-sun";
      body.setAttribute("data-bs-theme", "light");
      break;
    case "dark":
      themeIcon.className = "bi bi-moon-stars";
      body.setAttribute("data-bs-theme", "dark");
      break;
    case "auto":
      themeIcon.className = "bi bi-circle-half";
      if (window.matchMedia) {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDarkMode.addEventListener('change', (e) => {
          if (e.matches) {
            body.setAttribute("data-bs-theme", "dark");
          } else {
            body.setAttribute("data-bs-theme", "light");
          }
        });
        if (prefersDarkMode.matches) {
          body.setAttribute("data-bs-theme", "dark");
        } else {
          body.setAttribute("data-bs-theme", "light");
        }
      }
      break;
    default:
      break;
  }
  // Guardar la opción seleccionada en el local storage
  localStorage.setItem("selectedTheme", theme);
}

// Obtener el tema seleccionado del local storage
const savedTheme = localStorage.getItem("selectedTheme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme("auto"); // Establecer "auto" como tema predeterminado solo en el primer uso
}