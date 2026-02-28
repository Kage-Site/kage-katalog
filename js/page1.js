const body = document.body;
const logo = document.getElementById("logo");
const themeIcon = document.getElementById("themeIcon");

// Стартовая тема — тёмная
body.classList.remove("light");
updateAssets();

// Обновление логотипа и кнопки темы
function updateAssets() {
    if (body.classList.contains("light")) {
        logo.src = "../image/logo1.png";
        themeIcon.src = "../image/light.png"; // Солнце
        localStorage.setItem("theme", "light");
    } else {
        logo.src = "../image/logo2.png";
        themeIcon.src = "../image/dark.png"; // Луна
        localStorage.setItem("theme", "dark");
    }
}

// Сохраняем тему из localStorage при загрузке
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
} else {
    body.classList.remove("light");
}

updateAssets();

// Переключение темы по клику на кнопку
themeIcon.addEventListener("click", () => {
    body.classList.toggle("light");
    updateAssets();
});