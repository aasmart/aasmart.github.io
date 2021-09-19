window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}

const sheet = document.styleSheets[0];
const rules = sheet.cssRules || sheet.rules;

window.onload = () => {
    let fadeInCount = 0;
    // Style elements
    let introContainer = document.getElementById("intro-sub-container");

    document.addEventListener("animationend", (event) => {
        if(event.animationName === "float-up")
        if(event.animationName === "fade-in")
            fadeInCount++;
        if(fadeInCount === 2) {
            fadeInCount++;
            rules[3].style.overflowY = "visible";
        }
    })
}