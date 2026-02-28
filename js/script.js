const body = document.body;
const logo = document.getElementById("logo");
const themeIcon = document.getElementById("themeIcon");
const starsContainer = document.getElementById("stars");

/* Функция обновления логотипа и иконки темы */
function updateAssets() {
    if (body.classList.contains("light")) {
        if (logo) logo.src = "image/logo1.png";
        if (themeIcon) themeIcon.src = "image/light.png";
    } else {
        if (logo) logo.src = "image/logo2.png";
        if (themeIcon) themeIcon.src = "image/dark.png";
    }
}

/* Создание падающих звезд */
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

/* Установка темы при загрузке */
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
} else {
    body.classList.remove("light");
}

updateAssets();

/* Переключение темы по клику на иконку */
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