const body = document.body;
const logo = document.getElementById("logo");
const themeIcon = document.getElementById("themeIcon");
const starsContainer = document.getElementById("stars");

function updateAssets() {
    if (body.classList.contains("light")) {
        if (logo) logo.src = "logo1.png";
        if (themeIcon) themeIcon.src = "light.png";
    } else {
        if (logo) logo.src = "logo2.png";
        if (themeIcon) themeIcon.src = "dark.png";
    }
}

/* Звезды */
function createStar() {
    if (!starsContainer) return;

    const star = document.createElement("div");
    star.classList.add("star");
    star.textContent = "★";

    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (5 + Math.random() * 5) + "s";

    starsContainer.appendChild(star);

    setTimeout(() => star.remove(), 10000);
}

setInterval(createStar, 700);

/* Тема — тёмная по умолчанию */
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
}

updateAssets();

if (themeIcon) {
    themeIcon.addEventListener("click", () => {
        body.classList.toggle("light");

        if (body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

        updateAssets();
    });
}