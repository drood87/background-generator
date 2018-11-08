const color1 = document.querySelector("#inputColor1");
const color2 = document.querySelector("#inputColor2");
const output = document.getElementById("output");
const backgroundWrapper = document.querySelector(".wrapper");

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
    console.log(backgroundWrapper.style.backgroundImage);
    output.textContent = backgroundWrapper.style.backgroundImage + ";";
}
color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

changeBackground();
