const languageButton = document.getElementById("language");
let currentLanguage = "en";

function setLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en][data-ar]").forEach(element => {
        element.innerHTML = element.dataset[language];
    });

    languageButton.textContent = language === "en" ? "العربية" : "English";
}

languageButton.addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "ar" : "en");
});

document.getElementById("year").textContent = new Date().getFullYear();
