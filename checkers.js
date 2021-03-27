let BlackBräda = document.querySelectorAll(".Black_Bricka");
let RedBräda = document.querySelectorAll(".Red_Bricka");
const tablecells = document.querySelectorAll("td");

let RedScore = 12;
let RedTurn = true;
let BlackScore = 12;
let collectedPieces;

const VirtualBräda = [
    null, 0, null, 1, null, 2, null, 3, 
    null, 4, null, 5, null, 6, null, 7,
    null, 8, null, 9, null, 10, null, 11
    , null, , null, , null, , null, null, null,
    , null, , null, , null, , null, null, null,
    12, null, 13, null, 14, null, 15
    , null, 16, null, 17, null, 18
    , null, 19, null, 20, null, 21
    , null, 22, null, 23, null, 
];

//hello

let PickedPiece = {
    idPickedPiece: -1,
    indexOfPiece: -1,
    IsDam: false,
    SpaceSeven: false,
    SpaceNine: false,
    Space14: false,
    Space18: false,
    SpaceMinus7:false,
    SpaceMinus9: false,
    SpaceMinus14: false,
    SpaceMinus18: false,
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

function removeSelectonclick() {
    for (let i = 0; i < tablecells.length; i++) {
        
        tablecells[i].removeAttribute("onclick");
        
    }
}

function isPieceDam() {
    if(document.getElementById(PickedPiece.idPickedPiece).classList.contains("Dam")){
        PickedPiece.IsDam = true;
    }
    else {
        PickedPiece.IsDam = false;
    }

    getfreeSpaces();
}

function getfreeSpaces() {
    if (VirtualBräda[PickedPiece.indexOfPiece + 7] === null && tablecells[PickedPiece.indexOfPiece + 7].classList.contains("noBricka") !== true) {
        PickedPiece.SpaceSeven = true;
    }

    if (VirtualBräda[PickedPiece.indexOfPiece + 9] === null && tablecells[PickedPiece.indexOfPiece + 9].classList.contains("noBricka") !== true) {
        PickedPiece.SpaceNine = true;
    }

    if (VirtualBräda[PickedPiece.indexOfPiece - 7] === null && tablecells[PickedPiece.indexOfPiece - 7].classList.contains("noBricka") !== true) {
        PickedPiece.SpaceMinus7 = true;
    }

    if (VirtualBräda[PickedPiece.indexOfPiece - 9] === null && tablecells[PickedPiece.indexOfPiece - 9].classList.contains("noBricka") !== true) {
        PickedPiece.SpaceMinus9 = true;
    }
}

function piecefinder() {
    let parsed = parseInt(PickedPiece);
    return VirtualBräda.indexOf(parsed);
}

function getPickedPiece() {
    PickedPiece.idPickedPiece = parseInt(event.target.id);
    PickedPiece.indexOfPiece = piecefinder(parsed);
    isPieceDam();
}

function resetPiecePropt() {
    PickedPiece.idPickedPiece = -1;
    PickedPiece.idPickedPiece = -1;
    PickedPiece.IsDam = false;
    PickedPiece.SpaceSeven = false;
    PickedPiece.SpaceNine = false;
    PickedPiece.Space14 = false;
    PickedPiece.Space18 = false;
    PickedPiece.SpaceMinus7 = false;
    PickedPiece.SpaceMinus9 = false;
    PickedPiece.SpaceMinus14 = false;
    PickedPiece.SpaceMinus18 = false;
}

function GiveandResetBorders() {
    for (let i = 0; i < collectedPieces.length; i++) {
        
        collectedPieces[i].style.border = "2px solid green"
        
    }
    resetPiecePropt();
}