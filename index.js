window.onload = new function () {
    const introSubContainer = document.getElementById('intro-sub-container')

    console.log(introSubContainer)
    if (introSubContainer) {
        introSubContainer.addEventListener('click', introClick)
    }

    function introClick() {
        console.log("Test")
    }
}