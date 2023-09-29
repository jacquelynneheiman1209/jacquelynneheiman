
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

var primaryAccordions = document.getElementsByClassName("accordion-primary");

var i;
for (i = 0; i < primaryAccordions.length; i++) {
    primaryAccordions[i].classList.add("active");
    var content = primaryAccordions[i].nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";

    primaryAccordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

var secondaryAccordions = document.getElementsByClassName("accordion-secondary");

for (i = 0; i < secondaryAccordions.length; i++) {
    secondaryAccordions[i].classList.add("active");
    var content = secondaryAccordions[i].nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";

    secondaryAccordions[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}