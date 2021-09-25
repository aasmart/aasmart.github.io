window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}

const sheet = document.styleSheets[0];
const rules = sheet.cssRules || sheet.rules;

window.onload = () => {
    // Style elements
    let introContainer = document.getElementById("intro-sub-container");
    let scrollDown = document.getElementById("scroll-down");

    scrollDown.addEventListener("click", () => {
        introContainer.style.animation = "explode .5s forwards";
        scrollDown.style.animation = "fade-out .5s forwards";
        setTimeout(() => {
            window.location = "home.html";
        }, 350);
    });
}