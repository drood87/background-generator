const color1 = document.querySelector("#inputColor1");
const color2 = document.querySelector("#inputColor2");
const output = document.getElementById("output");
const backgroundWrapper = document.querySelector(".wrapper");
const randomButton = document.querySelector("#random");

function changeBackground() {
  backgroundWrapper.style.background =
    "linear-gradient(to top right, " + color1.value + ", " + color2.value + ")";
  output.style.background =
    "linear-gradient(to top right, " + color2.value + ", " + color1.value + ")";

  output.innerHTML = `${backgroundWrapper.style.backgroundImage};`;
}

function randomColor() {
  // create 3 random numbers for the RGB values
  var r = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
  var g = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
  var b = Number(Math.floor(Math.random() * 255 + 1)).toString(16);

  // concat rgb to Hex
  let rgb = r + g + b;

  //   In case random number returns 0 we just add 1
  if (rgb.length < 6) {
    rgb = rgb + 1;
    changeBackground();
    console.log(`if statement ${rgb}`);
    return rgb;
  } else {
    changeBackground();
    console.log(`else ${rgb}`);
    return rgb;
  }
}

// set background after running random color function
// we could add it in previous function but that would return same colors for both

function applyColor() {
  color1.setAttribute("value", `#${randomColor()}`);
  color2.setAttribute("value", `#${randomColor()}`);
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
randomButton.addEventListener("click", applyColor);
// applyColor1();
// applyColor2();
applyColor();
console.log(`color1 ${color1.value}, color2 ${color2.value}`);
// changeBackground();
