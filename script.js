const css = document.querySelector("h3");

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const color3 = document.querySelector(".color3");

const body = document.getElementById("gradient");

const colorRandom1 = '#' +(Math.floor(Math.random()*16777215).toString(16));
const colorRandom2 = '#' +(Math.floor(Math.random()*16777215).toString(16));
const colorRandom3 = '#' +(Math.floor(Math.random()*16777215).toString(16));

const randomButton = document.getElementById("random");
const switchButton = document.getElementById("switch");

document.querySelector('input[class="color1"]').value = colorRandom1;
document.querySelector('input[class="color2"]').value = colorRandom2;

body.style.background = `linear-gradient(to right, ${colorRandom1}, ${colorRandom2})`;
css.textContent = body.style.background + ";";


//generates 2 random colors if user clicks random color button
function generateRandomColor() {

    const colorRandom1 = '#' +(Math.floor(Math.random()*16777215).toString(16));
    const colorRandom2 = '#' +(Math.floor(Math.random()*16777215).toString(16));

    
    body.style.background = `linear-gradient(to right, ${colorRandom1}, ${colorRandom2})`;

    //sets both input values to the chosen random color
    document.querySelector('input[class="color1"]').value = colorRandom1;
    document.querySelector('input[class="color2"]').value = colorRandom2;

	css.textContent = body.style.background + ";";	

}

// generates 3 random background colors
function switchTo3RandomColors() {

	const colorRandom1 = '#' +(Math.floor(Math.random()*16777215).toString(16));
    const colorRandom2 = '#' +(Math.floor(Math.random()*16777215).toString(16));
    const colorRandom3 = '#' +(Math.floor(Math.random()*16777215).toString(16));

    body.style.background = `linear-gradient(to right, ${colorRandom1}, ${colorRandom2}, ${colorRandom3})`;

    document.querySelector('input[class="color1"]').value = colorRandom1;
    document.querySelector('input[class="color2"]').value = colorRandom2;
    document.querySelector('input[class="color3"]').value = colorRandom3;

    css.textContent = body.style.background + ";";

}

// creating function to change the color on user input

    const setGradient = () => body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ";";




color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);

randomButton.addEventListener("click", generateRandomColor);
switchButton.addEventListener("click", switchTo3RandomColors);



