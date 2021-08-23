window.onload = () => {
    let fadeInCount = 0;
    let introContainer = document.getElementById("intro-sub-container")

    document.addEventListener("animationend", (event) => {
        if(event.animationName === "float-up")
            introContainer.style.transform = "translate(0, -37px)"
        if(event.animationName === "fade-in")
            fadeInCount++
        if(fadeInCount === 2) {
            fadeInCount++
            let sheet = document.styleSheets[0]
            let rules = sheet.cssRules || sheet.rules;
            rules[2].style.overflowY = "visible"
        }
    })

    document.addEventListener("scroll",() => {
        const scrollHeight = (document.documentElement.scrollHeight - window.innerHeight);
        console.log(scrollHeight)
        const maxPercent = 300;
        const opacity =  1 - (document.documentElement.scrollTop / Math.min(maxPercent, scrollHeight));
        const height = Math.min(document.documentElement.scrollTop / Math.min(maxPercent, scrollHeight), 1);

        let introContainer = document.getElementById("intro-sub-container")
        introContainer.style.transform = `translateY(-${(height * 270) + 37}px) scale(${Math.max(opacity, .75)})`;

        let subtitle = document.getElementById("subtitle")
        subtitle.style.animationFillMode = "none"
        subtitle.style.opacity = opacity.toString()
    });
}