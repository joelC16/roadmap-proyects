import getRandomRepositoryByLanguage from "./github.js";

// DOM Elements
const dropdownHeader = document.querySelector(".dropdown-header");
const dropdownIcon = document.querySelector(".dropdown-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownSelected = document.querySelector(".dropdown-selected");
const containerRepository = document.querySelector(".container-repository");
const btnRandom = document.querySelector(".btn-random");

let selectedLanguage = null;

// Fetch languages and populate dropdown
async function populateLanguages() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json");
        const languages = await response.json();

        languages.forEach(language => {
            const item = document.createElement("div");
            item.classList.add("dropdown-item");
            item.textContent = language.title;

            item.addEventListener("click", () => {
                closeDropdown();
                selectLanguage(language.title);
            });

            dropdownMenu.appendChild(item);
        });
    } catch (error) {
        console.error("Failed to load languages:", error);
    }
}

// Toggle dropdown visibility
function toggleDropdown() {
    const isOpen = dropdownIcon.classList.contains("fa-chevron-up");
    dropdownIcon.classList.toggle("fa-chevron-up", !isOpen);
    dropdownIcon.classList.toggle("fa-chevron-down", isOpen);
    dropdownMenu.style.display = isOpen ? "none" : "flex";
}

// Close dropdown
function closeDropdown() {
    dropdownIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    dropdownMenu.style.display = "none";
}

// Set selected language and fetch repository
function selectLanguage(language) {
    selectedLanguage = language;
    dropdownSelected.textContent = language;
    fetchAndDisplayRepository();
}

// Fetch and display random repository
async function fetchAndDisplayRepository() {
    if (!selectedLanguage) {
        containerRepository.textContent = "Please select a language first.";
        return;
    }

    containerRepository.textContent = "Fetching a repository...";
    try {
        const repo = await getRandomRepositoryByLanguage(selectedLanguage);
        displayRepository(repo);
    } catch {
        containerRepository.textContent = "Failed to fetch repository.";
    }
}

// Render repository data
function displayRepository(repo) {
    if (!repo) {
        containerRepository.textContent = "No repositories found.";
        return;
    }

    containerRepository.innerHTML = `
        <a href="${repo.html_url}" class="container-response" target="_blank">
            <h4>${repo.name}</h4>
            <p>${repo.description || "No description available."}</p>
            <div class="container-info">
                <div>
                    <i class="devicon-${repo.language.toLowerCase()}-plain colored" style="font-size: 20px"></i>
                    <p>${repo.language}</p>
                </div>
                <div>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <p>${repo.stargazers_count}</p>
                </div>
                <div>
                    <i class="fa-solid fa-code-fork" style="color: #63E6BE;"></i>
                    <p>${repo.forks}</p>
                </div>
                <div>
                    <i class="fa-solid fa-circle-exclamation" style="color: #fb9898;"></i>
                    <p>${repo.open_issues}</p>
                </div>
            </div>
        </a>`;
}

// Event Listeners
dropdownHeader.addEventListener("click", toggleDropdown);
btnRandom.addEventListener("click", fetchAndDisplayRepository);

// Initialize
populateLanguages();
