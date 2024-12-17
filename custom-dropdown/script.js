const dropdownHeader = document.querySelector(".dropdown-header");
const dropdownIcon = document.querySelector(".dropdown-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const dropdownSelected = document.querySelector(".dropdown-selected");

// Abrir/Cerrar menú desplegable al hacer clic en el encabezado
dropdownHeader.addEventListener("click", () => {
  const isMenuOpen = dropdownIcon.classList.contains("fa-chevron-up");
  
  if (isMenuOpen) {
    dropdownIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    dropdownMenu.style.display = "none";
  } else {
    dropdownIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    dropdownMenu.style.display = "flex";
  }
});

// Seleccionar una opción y cerrar el menú
dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
    dropdownIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    dropdownSelected.textContent = item.textContent;
  });
});
