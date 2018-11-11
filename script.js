const color1 = document.querySelector("#inputColor1");
const color2 = document.querySelector("#inputColor2");
const output = document.getElementById("output");
const backgroundWrapper = document.querySelector(".wrapper");
const randomButton = document.querySelector("#random");

function changeBackground() {
    backgroundWrapper.style.background =
        "linear-gradient(to top right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    output.style.background =
        "linear-gradient(to top right, " +
        color2.value +
        ", " +
        color1.value +
        ")";

    output.innerHTML = backgroundWrapper.style.backgroundImage + ";";
}

function changeToRandomBackground() {
    color1.value = randomColor();
    color2.value = randomColor();

    backgroundWrapper.style.background =
        "linear-gradient(to top right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    output.style.background =
        "linear-gradient(to top right, " +
        color2.value +
        ", " +
        color1.value +
        ")";

    output.innerHTML = backgroundWrapper.style.backgroundImage + ";";
}

function randomColor() {
    // create 3 random numbers for the RGB values

    var r = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
    var g = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
    var b = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
    // concat rgb to Hex
    let rgb = "#" + r + g + b;
    console.log(rgb);
    //   In case random number returns 0 we just add 1
    if (rgb.length <= 6) {
        rgb = rgb + 1;
        return rgb;
    } else {
        return rgb;
    }
}
changeToRandomBackground();
randomButton.addEventListener("click", changeToRandomBackground);
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
