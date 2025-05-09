window.addEventListener("DOMContentLoaded", () => {
    const lang = new URLSearchParams(location.search).get("lang") || "en";
    const header = document.querySelector("#header");
    const footer = document.querySelector("#footer");

    const promises = [];

    if (header) promises.push(loadHTML("reusableComponents/header.html", "#header"));
    if (footer) promises.push(loadHTML("reusableComponents/footer.html", "#footer"));

    // Always load these
    promises.push(loadHTML("reusableComponents/motto.html", "#motto"));
    promises.push(loadHTML("reusableComponents/homeButton.html", "#homeButton"));

    Promise.all(promises).then(() => {
        applyTranslation(lang);
    });
});

function loadHTML(path, selector) {
    return fetch(path)
        .then(res => res.text())
        .then(html => {
            const el = document.querySelector(selector);
            if (el) el.innerHTML = html;
        });
}

function applyTranslation(lang) {
    fetch("lang.json")
        .then(res => res.json())
        .then(dict => {
            const content = dict[lang] || dict.en;

            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (content[key]) el.textContent = content[key];
            });

            // Aggiorna link
            document.querySelectorAll("a[href]").forEach(link => {
                const url = new URL(link.href, location.href);
                url.searchParams.set("lang", lang);
                link.href = url.toString();
            });

            // Attiva il link corrente del nav (se esiste)
            const path = location.pathname.split("/").pop();
            document.querySelectorAll(".nav-link").forEach(link => {
                if (link.getAttribute("href").includes(path)) {
                    link.classList.add("active");
                }
            });

            // Attiva il pulsante della lingua attuale
            document.querySelectorAll(".lang-switcher a").forEach(link => {
                if (link.dataset.lang === lang) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }

                // Cambia lingua al click
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const newLang = link.dataset.lang;
                    const url = new URL(window.location.href);
                    url.searchParams.set("lang", newLang);
                    window.location.href = url.toString();
                });
            });
        });
}
