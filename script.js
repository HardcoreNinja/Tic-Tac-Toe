let playerTurn = true;

const player = (playerName, playerIcon) => {

    let name = playerName;
    let icon = playerIcon;
    let score = 0;

    let moves = [
        false, false, false,
        false, false, false,
        false, false, false
    ];

    return { name, icon, score, moves };
}

const player1 = player("Wake", "x");
const AI = player("AI", "o");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function AITurn() {

    AI.moves = player1.moves;

    let indexList = [];
    for (let i = 0; i < AI.moves.length; i++) {
        if (AI.moves[i] === false)
            indexList.push(i);
    }

    console.table(indexList);

    let squareID = parseInt(indexList[getRandomInt(indexList.length)]);
    const square = document.getElementById(squareID);

    if (AI.icon === "x")
        square.style.backgroundImage = "url('x.svg')";
    else if (AI.icon === "o")
        square.style.backgroundImage = "url('o.svg')";

    AI.moves[squareID] = true;

    playerTurn = !playerTurn;

}



function placeMarker() {

    player1.moves = AI.moves;

    if (playerTurn) {

        if (player1.moves[this.id] === false) {

            if (player1.icon === "x")
                this.style.backgroundImage = "url('x.svg')"
            else
                this.style.backgroundImage = "url('o.svg')";

            player1.moves[this.id] = true;

            playerTurn = !playerTurn;

            AITurn();
        }
        else {
            alert("Can't Move There!");
        }
    }
}

function drawGrid() {
    const gridContainer = document.querySelector("#gridContainer");
    const maxSquares = 9;

    for (let i = 0; i < maxSquares; i++) {
        let square = document.createElement('div');
        square.classList.add("container");
        square.setAttribute("id", i);
        square.addEventListener("mousedown", placeMarker);

        switch (i) {
            case 0:
                square.style.borderRight = "1px solid black";
                break;
            case 2:
                square.style.borderLeft = "1px solid black";
                break;
            case 3:
                square.style.borderTop = "1px solid black";
                square.style.borderRight = "1px solid black";
                square.style.borderBottom = "1px solid black";
                break;
            case 4:
                square.style.borderTop = "1px solid black";
                square.style.borderBottom = "1px solid black";
                break;
            case 5:
                square.style.borderTop = "1px solid black";
                square.style.borderLeft = "1px solid black";
                square.style.borderBottom = "1px solid black";
                break;
            case 6:
                square.style.borderRight = "1px solid black";
                break;
            case 8:
                square.style.borderLeft = "1px solid black";
                break;
        }

        gridContainer.appendChild(square);
    }
}

window.onload = drawGrid();