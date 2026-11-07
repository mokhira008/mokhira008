// THEME SWITCHER

const root = document.documentElement;

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");


function applyTheme(theme) {

    root.dataset.theme = theme;

    const isDark = theme === "dark";

    themeIcon.textContent = isDark ? "☀" : "☾";

    themeLabel.textContent = isDark
        ? "Light mode"
        : "Dark mode";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    localStorage.setItem("mohira-theme", theme);

}


// Load saved theme

const savedTheme = localStorage.getItem("mohira-theme");

const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

applyTheme(
    savedTheme || (prefersDark ? "dark" : "light")
);


// Switch theme when button is clicked

themeToggle.addEventListener("click", () => {

    const newTheme =
        root.dataset.theme === "dark"
            ? "light"
            : "dark";

    applyTheme(newTheme);

});


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


// Close menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();