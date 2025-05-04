window.addEventListener("DOMContentLoaded", () => {
    const lang = new URLSearchParams(location.search).get("lang") || "en";
      
    // Load header, footer, then run translation
    Promise.all([
        loadHTML("reusableComponents/header.html", "#header"),
        loadHTML("reusableComponents/footer.html", "#footer"),
    ]).then(() => {
        return fetch("lang.json");
    }).then(res => res.json())
        .then(dict => {
        const content = dict[lang] || dict.en;
      
        // Translate elements
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (content[key]) el.textContent = content[key];
        });
      
        // Update all links to preserve lang param
        document.querySelectorAll("a[href]").forEach(link => {
            const url = new URL(link.href, location.href);
            url.searchParams.set("lang", lang);
            link.href = url.toString();
        });
      
        // Highlight current language button
        // Make language switcher links work dynamically
        document.querySelectorAll(".lang-switcher a").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const newLang = link.dataset.lang;
                const url = new URL(window.location.href);
                url.searchParams.set("lang", newLang);
                window.location.href = url.toString(); // reload with new lang
            });
        });
  
        // Highlight current nav link
        const path = location.pathname.split("/").pop();
        document.querySelectorAll(".nav-link").forEach(link => {
            if (link.getAttribute("href").includes(path)) {
                link.classList.add("active");
            }
        });

        document.querySelectorAll(".lang-switcher a").forEach(link => {
            if (link.getAttribute("href").includes(path)) {
                link.classList.add("active");
            }
        });
    });
});
      
function loadHTML(path, selector) {
    return fetch(path)
    .then(res => res.text())
    .then(html => {
        document.querySelector(selector).innerHTML = html;
    });
}

loadHTML("reusableComponents/motto.html", "#motto"),
loadHTML("reusableComponents/homeButton.html", "#homeButton")
      
  