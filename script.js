
const sections = ["home", "about", "skills", "work", "achievements", "projects"];
let currentSectionIndex = 0;

function showSection(index) {
    document.querySelectorAll(".section").forEach((section, idx) => {
        section.classList.toggle("active", idx === index);
    });
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
    showSection(currentSectionIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    showSection(currentSectionIndex);
});

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const themeButton = document.querySelector(".toggle-theme");
    themeButton.textContent = document.body.classList.contains("dark-mode") ? "Light Theme" : "Dark Theme";
}
