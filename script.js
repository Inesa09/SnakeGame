const frame = document.getElementById("game");
const snake = document.getElementsByClassName("snake")[0];
let id;
let coord = [0, 0];


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

const increment = (val) => ++val;
const decrement = (val) => --val;

const move = (side, func) => {
    snake.style.transform = "translate(" + coord[0] + "px," + coord[1] + "px)";
    coord[side] = func(coord[side]);
    // console.log(coord[side]);
    console.log("x: " + coord[0] + ", y: " + coord[1]);
    // console.log("frame - " + getPosition(frame) + " snake - " + getPosition(snake));
    // console.log(snake.style.transform);
    // if (increment)
    //     side++;
    // else
    //     side--;
    gameOver();
}

const moveToDirection = (direction) => {
    switch(direction){
        case("Left"):
            id = setInterval(move, 5, 0, decrement);
            break;
        case("Right"):
            id = setInterval(move, 5, 0, increment);
            break;
        case("Up"):
            id = setInterval(move, 5, 1, decrement);
            break;
        case("Down"):
            id = setInterval(move, 5, 1, increment);
            break;

    }

    // if (direction === "Left" || direction === "Right")
    //     side = x;
    // else 
    //     side = y;
    // if (direction === "Right" || direction === "Down")
    //     increment = true;

    // id = setInterval(move, 5, side, increment);
}



const play = () => {
    document.getElementById("play").style.display = "none";
    frame.style.display = "block";

    document.addEventListener("keydown", function(event) { //"ArrowLeft"
        stopMove();
        moveToDirection(event.key.slice(5));
    });
}