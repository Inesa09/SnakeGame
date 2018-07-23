const frame = document.getElementById("game");
const snake = document.getElementsByClassName("snake")[0];
let id;
let coord = [0, 0]; // [x, y]


const getPosition = (element) => {
    const pos = element.getBoundingClientRect();
    return [Math.round(pos.left), Math.round(pos.right), Math.round(pos.top), Math.round(pos.bottom)];
}

const isTouched = (position1, position2) => {
    for (let i = 0; i < position1.length; i++) {
        if(position1[i] === position2[i])
            return true;
    } return false;
}

const stopMovement = () => {
    clearInterval(id);
}

const gameOver = () => {
    if (isTouched(getPosition(frame), getPosition(snake))) {
        stopMovement();
        // alert("Game Over!");
    }
}

const increment = (val) => ++val;
const decrement = (val) => --val;

const move = (side, func) => {
    snake.style.transform = "translate(" + coord[0] + "px," + coord[1] + "px)";
    coord[side] = func(coord[side]);
    gameOver();
}

const startInterval = (side, func) => {
    id = setInterval(move, 5, side, func);
}

const moveToDirection = (direction) => {
    switch(direction){
        case("Left"):
            startInterval(0, decrement);
            break;
        case("Right"):
            startInterval(0, increment);
            break;
        case("Up"):
            startInterval(1, decrement);
            break;
        case("Down"):
            startInterval(1, increment);
            break;
    }
}

const readyForMovement = () => {
    document.addEventListener("keydown", function(event) { //"ArrowLeft"
        if (event.keyCode >= 37 && event.keyCode <= 40)
            stopMovement();
        moveToDirection(event.key.slice(5));
    });
}

const play = () => {
    document.getElementById("play").style.display = "none";
    frame.style.display = "block";
    readyForMovement();
}