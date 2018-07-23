var color1, color2;
var body = document.getElementById("body");

const addRandomColor = () => '#'+ Math.floor(Math.random()*16777215).toString(16);

function setGradient(color1, color2){
    body.style.background = "linear-gradient(to right, " 
    + color1 + ", " +  color2 + ")";
}

const background = () => {
    setInterval (function() {
        setGradient(addRandomColor(), addRandomColor());
    }, 2000);
}