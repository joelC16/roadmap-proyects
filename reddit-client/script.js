const containerSubreddits = document.querySelector(".grid");
const btnAddSubreddit = document.querySelector(".add-popup-btn");
const inputPopup = document.querySelector(".popup input");
const btnAdd = document.querySelector(".btn-add");
const popup = document.querySelector(".popup");

// Función para obtener información de subreddit
async function getSubredditInfo() {
    try {
        const response = await fetch(`https://www.reddit.com/r/${inputPopup.value}.json`);
        if (!response.ok) {
            throw new Error("Subreddit no encontrado o error en la solicitud.");
        }
        const data = await response.json();
        const subreddits = data.data.children;

        if (subreddits.length === 0) {
            throw new Error("El subreddit no tiene publicaciones.");
        }

        const containerSubreddit = document.createElement("div");
        containerSubreddit.classList = "subreddit-column";
        containerSubreddit.innerHTML = `
            <div class="column-header">
                <h2>/r/${inputPopup.value}</h2>
                <button class="menu-btn">⋮</button>
            </div>
            <ul class="post-list"></ul>
        `;
        containerSubreddits.appendChild(containerSubreddit);

        const postList = containerSubreddit.querySelector(".post-list");

        subreddits.forEach((subreddit) => {
            const listItem = document.createElement("li");
            listItem.classList.add("post");

            listItem.innerHTML = `
                <span class="votes">${subreddit.data.ups}</span>
                <a href="${subreddit.data.url}">${subreddit.data.title}</a>
            `;

            postList.appendChild(listItem);
        });

        // Agregar funcionalidad al botón "menu-btn"
        const menuBtn = containerSubreddit.querySelector(".menu-btn");
        menuBtn.addEventListener("click", (event) => {
            showMenuPopup(event.target, containerSubreddit);
        });

    } catch (error) {
        showError(error.message);
    }
}

function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.classList.add("show");

    setTimeout(() => {
        errorMessage.classList.remove("show");
    }, 3000);
}


// Agregar subreddit al hacer clic en el botón del popup
btnAddSubreddit.addEventListener("click", async () => {
    if (!inputPopup.value.trim()) {
        showError("Por favor, introduce un nombre de subreddit.");
        return;
    }
    await getSubredditInfo();
    popup.style.display = "none";
    inputPopup.value = "";
});


// Abrir y cerrar el popup principal
btnAdd.addEventListener("click", () => {
    popup.style.display = popup.style.display === "block" ? "none" : "block";
});

// Mostrar popup de opciones "Delete" y "Refresh"
function showMenuPopup(button, subredditColumn) {
    // Crear el popup si no existe
    let menuPopup = subredditColumn.querySelector(".menu-popup");
    if (!menuPopup) {
        menuPopup = document.createElement("div");
        menuPopup.classList.add("menu-popup");
        menuPopup.innerHTML = `
            <button class="menu-option delete-option">Delete</button>
            <button class="menu-option refresh-option">Refresh</button>
        `;
        subredditColumn.appendChild(menuPopup);

        // Posicionar el popup cerca del botón
        const rect = button.getBoundingClientRect();
        menuPopup.style.position = "absolute";
        menuPopup.style.top = `${rect.top + window.scrollY + button.offsetHeight}px`;
        menuPopup.style.left = `${rect.left + window.scrollX}px`;

        // Funcionalidad de "Delete"
        const deleteOption = menuPopup.querySelector(".delete-option");
        deleteOption.addEventListener("click", () => {
            subredditColumn.remove();
        });

        // Funcionalidad de "Refresh"
        const refreshOption = menuPopup.querySelector(".refresh-option");
        refreshOption.addEventListener("click", async () => {
            subredditColumn.querySelector(".post-list").innerHTML = "";
            const subredditName = subredditColumn.querySelector("h2").innerText.replace("/r/", "");
            inputPopup.value = subredditName;
            await getSubredditInfo();
            subredditColumn.remove();
        });
    }

    // Mostrar/ocultar el popup de opciones
    menuPopup.style.display = menuPopup.style.display === "block" ? "none" : "block";
}
