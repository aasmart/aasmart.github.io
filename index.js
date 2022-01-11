window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}

const sheet = document.styleSheets[0];
const rules = sheet.cssRules || sheet.rules;

window.onload = () => {
    if(window.location.href.includes("home.html")) {
        const pictures = ["Images/dog1.jpg", "Images/dog2.jpg", "Images/dog3.jpg"];
        let imageNum = 1;
        let isTop = true;
        window.addEventListener("animationiteration", (event) => {
            let target = event.target;
            if(target.className.includes("dog-top")) {
                let dogBottom = document.getElementsByClassName("dog-bottom")[0];
                imageNum++;
                if(imageNum >= pictures.length)
                    imageNum = 0;
                if(isTop) {
                    target.src = pictures[imageNum];
                    target.classList.remove(target.classList[1]);
                    target.classList.add(`dog-${imageNum+1}`);
                } else {
                    dogBottom.src = pictures[imageNum];
                    dogBottom.classList.remove(dogBottom.classList[1]);
                    dogBottom.classList.add(`dog-${imageNum+1}`);
                }
                isTop = !isTop;
            }
        })

        cycleDogPicture();
    } else {
        // Style elements
        let introContainer = document.getElementById("intro-sub-container");
        let scrollDown = document.getElementById("home-page");

        scrollDown.addEventListener("click", () => {
            introContainer.style.animation = "shrink .5s forwards";
            scrollDown.style.animation = "fade-out .5s forwards";
            window.location.href = "home.html";
        });
    }
}

function cycleDogPicture() {
    let dogBottom = document.getElementsByClassName("dog-bottom");
    let dogTop = document.getElementsByClassName("dog-top");

    if(dogTop.length > 0)
        dogTop[0].style.animation = "fade-out-delay 10s 4.5s infinite alternate";
    if(dogBottom.length > 0)
        dogBottom[0].style.animation = "fade-in-delay 10s 4.5s infinite alternate";
}