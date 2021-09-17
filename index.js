window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}

let sheet = document.styleSheets[0];
let rules = sheet.cssRules || sheet.rules;
let introContainerTop;
let containerTopRatio;

window.onload = () => {
    let fadeInCount = 0;
    // Style elements
    let introContainer = document.getElementById("intro-sub-container");
    let header = document.getElementById("header");
    let subtitle = document.getElementById("subtitle");

    // Ideal widths
    let windowWidth = window.innerWidth;
    let idealWidth = 1707;

    containerTopRatio = introContainer.getBoundingClientRect().top / windowWidth;
    introContainerTop = windowWidth * containerTopRatio;

    document.addEventListener("animationend", (event) => {
        if(event.animationName === "float-up")
            introContainer.style.transform = "translate(0, -35px)";
        if(event.animationName === "fade-in")
            fadeInCount++;
        if(fadeInCount === 2) {
            fadeInCount++;
            rules[3].style.overflowY = "visible";
        }
    })

    document.addEventListener("scroll",() => {
        const scrollHeight = (document.documentElement.scrollHeight - window.innerHeight);
        if(scrollHeight <= 0)
            return;
        const maxPercent = 300;
        const opacity =  1 - (document.documentElement.scrollTop / Math.min(maxPercent, scrollHeight));

        // Styling for the header
        header.style.opacity = (1-opacity >= .7 ? ((1-opacity-.7)*10) : 0).toString();

        // Styling for the intro container
        introContainer.style.transform = `scale(${Math.max(opacity, .65)})`;

        // Handle scrolling
        introContainerScrolling(introContainer, introContainerTop, windowWidth, idealWidth);

        // Styling for the subtitle
        subtitle.style.animationFillMode = "none";
        subtitle.style.opacity = opacity.toString();
    });

    // Resize & Orientation Change Events
    window.addEventListener("resize", () => {
        windowWidth = window.innerWidth;
        introContainerScrolling(introContainer, introContainerTop, windowWidth, idealWidth);
        headerBannerHeight(header, windowWidth, idealWidth)
    });

    window.addEventListener("orientationchange", () => {
        windowWidth = screen.innerWidth;
        introContainerTop = windowWidth * containerTopRatio;
        alert(`Test 1.1 ${screen.innerWidth}`)
        introContainerScrolling(introContainer, introContainerTop, windowWidth, idealWidth);
        headerBannerHeight(header, windowWidth, idealWidth)
    });
}

function introContainerScrolling(introContainer, introContainerTop, windowWidth, idealWidth) {
    // Handle scrolling
    let containerMax = window.getComputedStyle(introContainer).getPropertyValue("--container-top-distance");
    containerMax -= (1-(windowWidth / idealWidth)) * 60;

    if((-window.pageYOffset) + introContainerTop > -containerMax)
        introContainer.style.top = `${-window.pageYOffset + introContainerTop}px`;
    else {
        introContainer.style.top = `${-containerMax}px`;
        console.log("...")
    }
}

function headerBannerHeight(header, windowWidth, idealWidth) {
    let titleSize = (144 * (windowWidth / idealWidth));
    header.style.height = `${Math.min(titleSize * 1.71, 160)}px`;
}