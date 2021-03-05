let BlackBräda = document.querySelectorAll(".Black_Bricka");
let RedBräda = document.querySelectorAll(".Red_Bricka");
const tablecells = document.querySelectorAll("td");

let RedScore = 12;
let RedTurn = true;
let BlackScore = 12;

const VirtualBräda = [
    null, 0, null, 1, null, 2, null, 3, 
    null, 4, null, 5, null, 6, null, 7,
    null, 8, null, 9, null, 10, null, 11
    , null, , null, , null, , null, 
    , null, , null, , null, , null, 
    12, null, 13, null, 14, null, 15
    , null, 16, null, 17, null, 18
    , null, 19, null, 20, null, 21
    , null, 22, null, 23, null, 
];

let PickedPiece = {
    idPickedPiece = -1
}

function turnfunctions() {
    if(turn = true)
    {
        PickedPiece = RedBräda;
    }
    else if (turn = false)
    {
        PickedPiece = BlackBräda;
    }
}

function getPieceEventListener(){
    for (let i = 0; i < RedBräda.length; index++) {
        RedBräda[i].addEventListener("click", turnfunctions)
    }

    for (let index = 0; index < BlackBräda.length; index++) {
       BlackBräda[i].addEventListener("click", turnfunctions)
    }
}