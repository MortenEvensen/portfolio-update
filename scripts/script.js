/* Open and close fullscreen size windows on index page */
var leftStyle = document.getElementById("left");
var rightStyle = document.getElementById("right");

var imagewrap = document.getElementById("firstcontentwrap")

var header = document.getElementById("header");

var webHeader = document.getElementById("web");
var musicHeader = document.getElementById("music");

var webText = document.getElementById("web-text");
var webButton = document.getElementById("web-button");

var musicText = document.getElementById("music-text");
var musicButton = document.getElementById("music-button");

leftStyle.addEventListener("click", function() {
    if (leftStyle.classList.contains("flex") === false && window.innerWidth >= 800) {
        rightStyle.style.flex = 0;
        rightStyle.style.width = 0;
        imagewrap.style.height = "140vh"
        imagewrap.style.margin = "-40vh 0 0 0"
        header.style.margin = "40vh 0 0 0"
        webHeader.style.top = "60vh"
        leftStyle.classList.add("flex")
        musicHeader.style.display = "none";
        webText.style.opacity = "1";
        webButton.style.opacity = "1";
        musicButton.style.display = "none";
        musicText.style.display = "none"
        webText.style.marginLeft = "20px";
        webButton.style.marginLeft = "0px";

    } else if (leftStyle.classList.contains("flex") === true && window.innerWidth >= 800) {
        rightStyle.style.flex = 1;
        rightStyle.style.width = "100%";
        imagewrap.style.height = "100vh";
        imagewrap.style.margin = "0 0 0 0"
        header.style.margin = 0;
        webHeader.style.top = "100px";
        leftStyle.classList.remove("flex")
        musicHeader.style.display = "block"
        webText.style.opacity = 0
        webButton.style.opacity = 0
        musicButton.style.display = "block";
        musicText.style.display = "block"
        webText.style.marginLeft = "-3000px";
        webButton.style.marginLeft = "-3000px";

    } else if (leftStyle.classList.contains("flex") === false && window.innerWidth < 800) {
        rightStyle.style.flex = 0;
        rightStyle.style.height = 0;
        musicHeader.style.display = "none";
        leftStyle.classList.add("flex");
        webText.style.opacity = 1
        webButton.style.opacity = 1
        musicButton.style.display = "none"
        musicText.style.display = "none"
        webText.style.marginLeft = "20px";
        webButton.style.marginLeft = "0px";
    } else if (leftStyle.classList.contains("flex") === true && window.innerWidth < 800) {
        rightStyle.style.flex = 1;
        rightStyle.style.width = "100%";
        leftStyle.classList.remove("flex");
        musicHeader.style.display = "block";
        webText.style.opacity = 0
        webButton.style.opacity = 0
        musicButton.style.display = "block"
        musicText.style.display = "block"
        webText.style.marginLeft = "-3000px";
        webButton.style.marginLeft = "-3000px";
    }
})


rightStyle.addEventListener("click", function() {
    if (rightStyle.classList.contains("flex") === false && window.innerWidth >= 800) {
        leftStyle.style.flex = 0;
        leftStyle.style.width = 0;
        imagewrap.style.height = "140vh"
        imagewrap.style.margin = "-40vh 0 0 0"
        header.style.margin = "40vh 0 0 0"
        musicHeader.style.top = "60vh"
        rightStyle.classList.add("flex")
        webHeader.style.display = "none"
        musicText.style.opacity = 1
        musicButton.style.opacity = 1
        musicText.style.marginLeft = "20px";
        musicButton.style.marginLeft = "0px";


    } else if (rightStyle.classList.contains("flex") === true && window.innerWidth >= 800) {
        leftStyle.style.flex = 1;
        leftStyle.style.width = "100%";
        imagewrap.style.height = "100vh";
        imagewrap.style.margin = "0 0 0 0"
        header.style.margin = 0
        musicHeader.style.top = "100px"
        rightStyle.classList.remove("flex")
        webHeader.style.display = "block"
        musicText.style.opacity = 0
        musicButton.style.opacity = 0
        musicText.style.marginLeft = "-3000px";
        musicButton.style.marginLeft = "-3000px";

    } else if (rightStyle.classList.contains("flex") === false && window.innerWidth < 800) {
        leftStyle.style.flex = 0;
        leftStyle.style.height = 0;
        header.style.margin = "0 0 0 0"
        rightStyle.classList.add("flex")
        webHeader.style.display = "none"
        musicText.style.opacity = 1
        musicButton.style.opacity = 1
        musicText.style.marginLeft = "20px";
        musicButton.style.marginLeft = "0px";
    } else if (rightStyle.classList.contains("flex") === true && window.innerWidth < 800) {
        leftStyle.style.flex = 1;
        leftStyle.style.width = "100%";
        header.style.margin = 0
        musicHeader.style.top = "100px"
        rightStyle.classList.remove("flex")
        webHeader.style.display = "block"
        musicText.style.opacity = 0
        musicButton.style.opacity = 0
        musicText.style.marginLeft = "-3000px";
        musicButton.style.marginLeft = "-3000px";
    }
})

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("overlay-menu").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("overlay-menu").style.width = "0%";
}