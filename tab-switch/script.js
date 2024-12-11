const options = document.querySelectorAll(".option");
const infoOptions = document.querySelectorAll(".info-option");

options.forEach((option) => {
    option.addEventListener("click", () => {
        const dataID = option.getAttribute("dataID");

        // Elimino las clases de todas las opciones
        options.forEach((opt) => opt.classList.remove("option-active"));
        infoOptions.forEach((infoOption) => {
            infoOption.classList.remove("info-option-active");

            // Pongo la class para que aparezca la info
            if (infoOption.getAttribute("dataID") === dataID) {
                infoOption.classList.add("info-option-active");
            }
        });

        // Pongo la clase a la opción que clikearon
        option.classList.add("option-active");
    });
});
