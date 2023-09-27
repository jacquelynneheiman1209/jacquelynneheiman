
const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const searchButton = document.querySelector(".search-box");
const searchBox = document.querySelector(".search-bar");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");

searchButton.addEventListener("click", () => {
    sidebar.classList.remove("close");
    searchBox.focus();
});

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    }
    else {
        modeText.innerText = "Dark Mode";
    }
});
