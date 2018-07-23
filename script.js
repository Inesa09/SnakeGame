const frame = document.getElementById("game");
const snake = document.getElementsByClassName("snake")[0];
let id, translate = 0;


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

const stopMove = () => {
    clearInterval(id);
}

const gameOver = () => {
    if (isTouched(getPosition(frame), getPosition(snake))) {
        stopMove();
        // alert("Game Over!");
    }
}

const move = (side, increment) => {
    snake.style.transform = "translate" + side + "(" + translate + "px)";
    console.log("frame - " + getPosition(frame) + " snake - " + getPosition(snake));
    if (increment)
        translate++;
    else
        translate--;
    gameOver();
}

const moveToDirection = (direction) => {
    let side, increment = false;

    if (direction === "Left" || direction === "Right")
        side = "X";
    else 
        side = "Y";
    if (direction === "Right" || direction === "Down")
        increment = true;

    id = setInterval(move, 5, side, increment);
}



const play = () => {
    document.getElementById("play").style.display = "none";
    frame.style.display = "block";

    document.addEventListener("keydown", function(event) { //"ArrowLeft"
        stopMove();
        moveToDirection(event.key.slice(5));
    });
}