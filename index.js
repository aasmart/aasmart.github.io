window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}

window.onload = () => {
    let fadeInCount = 0;
    let introContainer = document.getElementById("intro-sub-container");

    document.addEventListener("animationend", (event) => {
        if(event.animationName === "float-up")
            introContainer.style.transform = "translate(0, -4.32vh)";
        if(event.animationName === "fade-in")
            fadeInCount++;
        if(fadeInCount === 2) {
            fadeInCount++;
            let sheet = document.styleSheets[0];
            let rules = sheet.cssRules || sheet.rules;
            rules[2].style.overflowY = "visible";
        }
    })

    document.addEventListener("scroll",() => {
        const scrollHeight = (document.documentElement.scrollHeight - window.innerHeight);
        const maxPercent = 300;
        const opacity =  1 - (document.documentElement.scrollTop / Math.min(maxPercent, scrollHeight));
        const height = Math.min(document.documentElement.scrollTop / Math.min(maxPercent, scrollHeight), 1);

        // Styling for the header
        let header = document.getElementById("header");
        header.style.opacity = (1-opacity >= .7 ? ((1-opacity-.7)*10) : 0).toString();

        // Styling for the intro container
        let introContainer = document.getElementById("intro-sub-container");
        introContainer.style.transform = `translateY(-${(height * 32.7) + 4.32}vh) scale(${Math.max(opacity, .65)})`;

        // Styling for the subtitle
        let subtitle = document.getElementById("subtitle");
        subtitle.style.animationFillMode = "none";
        subtitle.style.opacity = opacity.toString();
    });
}