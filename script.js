const color1 = document.querySelector("#inputColor1");
const color2 = document.querySelector("#inputColor2");
const output = document.getElementById("output");
const backgroundWrapper = document.querySelector(".wrapper");
const randomButton = document.querySelector("#random");

color1.setAttribute("value", color1.value);
color2.setAttribute("value", color2.value);

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

    output.innerHTML = `${backgroundWrapper.style.backgroundImage};`;
}

function randomColor() {
    var r = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
    var g = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
    var b = Number(Math.floor(Math.random() * 255 + 1)).toString(16);

    // concat rgb to Hex

    let rgb = r + g + b;
    console.log(`concat ${rgb}`);

    if (rgb.length < 6) {
        rgb = rgb + 1;
        console.log(`rgb ${rgb}`);
        return rgb;
    }

    console.log(r, g, b);
    changeBackground();
    return rgb;
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
randomButton.addEventListener("click", randomColor);
color1.setAttribute("value", `#${randomColor()}`);
color2.setAttribute("value", `#${randomColor()}`);
changeBackground();
randomColor();
