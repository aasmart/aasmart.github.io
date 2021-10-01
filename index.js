window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}

const sheet = document.styleSheets[0];
const rules = sheet.cssRules || sheet.rules;

window.onload = () => {
    if(window.location.href.includes("index.html")) {
        // Style elements
        let introContainer = document.getElementById("intro-sub-container");
        let scrollDown = document.getElementById("home-page");

        scrollDown.addEventListener("click", () => {
            introContainer.style.animation = "shrink .5s forwards";
            scrollDown.style.animation = "fade-out .5s forwards";
            setTimeout(() => {
                window.location.href = "home.html";
            }, 350);
        });
    } else {
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
    }
}

function cycleDogPicture() {
    let dogBottom = document.getElementsByClassName("dog-bottom")[0];
    let dogTop = document.getElementsByClassName("dog-top")[0];

    dogTop.style.animation = "fade-out-delay 10s 4.5s infinite alternate";
    dogBottom.style.animation = "fade-in-delay 10s 4.5s infinite alternate";
}