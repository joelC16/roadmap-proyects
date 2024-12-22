const dropdownHeader = document.querySelector(".dropdown-header");
const dropdownHeader2 = document.querySelector(".dropdown-header-2");
const dropdownIcon = document.querySelector(".dropdown-icon");
const dropdownIcon2 = document.querySelector(".dropdown-icon-2");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenu2 = document.querySelector(".dropdown-menu-2");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const dropdownItems2 = document.querySelectorAll(".dropdown-item-2");
const dropdownSelected = document.querySelector(".dropdown-selected");
const dropdownSelected2 = document.querySelector(".dropdown-selected-2");
const amountInput = document.querySelector(".amount");
const messages = document.querySelector(".messages");



function dropDown(dropdownHeader, dropdownIcon, dropdownMenu, dropdownItems, dropdownSelected) {
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
}

dropDown(dropdownHeader, dropdownIcon, dropdownMenu, dropdownItems, dropdownSelected)
dropDown(dropdownHeader2, dropdownIcon2, dropdownMenu2, dropdownItems2, dropdownSelected2)



function convertion() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount)) {
        messages.textContent = "Please enter a valid number.";
        messages.style.color = "red";
        return;
    }

    let result = "";
    if (dropdownSelected.textContent === "Fahrenheit" && dropdownSelected2.textContent === "Celsius") {
        result = `${amount} Fahrenheit is ${fahrenheitToCelsius(amount).toFixed(2)} Celsius`;
    } else if (dropdownSelected.textContent === "Fahrenheit" && dropdownSelected2.textContent === "Kelvin") {
        result = `${amount} Fahrenheit is ${fahrenheitToKelvin(amount).toFixed(2)} Kelvin`;
    } else if (dropdownSelected.textContent === "Kelvin" && dropdownSelected2.textContent === "Celsius") {
        result = `${amount} Kelvin is ${kelvinToCelsius(amount).toFixed(2)} Celsius`;
    } else if (dropdownSelected.textContent === "Kelvin" && dropdownSelected2.textContent === "Fahrenheit") {
        result = `${amount} Kelvin is ${kelvinToFahrenheit(amount).toFixed(2)} Fahrenheit`;
    } else if (dropdownSelected.textContent === "Celsius" && dropdownSelected2.textContent === "Fahrenheit") {
        result = `${amount} Celsius is ${celsiusToFahrenheit(amount).toFixed(2)} Fahrenheit`;
    } else if (dropdownSelected.textContent === "Celsius" && dropdownSelected2.textContent === "Kelvin") {
        result = `${amount} Celsius is ${celsiusToKelvin(amount).toFixed(2)} Kelvin`;
    } else if (dropdownSelected.textContent === dropdownSelected2.textContent) {
        result = `${amount} ${dropdownSelected.textContent} is equal to ${amount} ${dropdownSelected2.textContent}`;
    } else {
        result = "We could not process the operation.";
        messages.style.color = "red";
    }

    messages.textContent = result;
    if (result !== "We could not process the operation.") {
        messages.style.color = "green";
    }
}

// Funciones de conversión
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) / 1.8 + 273.15;
}
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 1.8 + 32;
}
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
