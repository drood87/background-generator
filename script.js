const css = document.querySelector("h3");

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const body = document.getElementById("gradient");

const colorRandom1 = '#' +(Math.floor(Math.random()*16777215).toString(16));
const colorRandom2 = '#' +(Math.floor(Math.random()*16777215).toString(16));

const randomButton = document.getElementById("random");

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

// creating function to change the color on user input

    const setGradient = () => body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ";";




color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", generateRandomColor);



