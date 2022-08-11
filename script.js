let playerTurn = true;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const player = (playerName, playerIcon) => {

    let name = playerName;
    let icon = playerIcon;
    let score = 0;
    let moves = [
        "--", "--", "--",
        "--", "--", "--",
        "--", "--", "--"
    ];

    const analyzeMoves = () => {

        let blank = [];
        let opponent = []
        let mine = []
        for (let i = 0; i < moves.length; i++) {
            if (icon === "x") {
                if (moves[i] === "x")
                    mine.push(i);
                else if (moves[i] === "o")
                    opponent.push(i);
                else if (moves[i] === "--")
                    blank.push(i);
            }
            else {

                if (moves[i] === "o")
                    mine.push(i);
                else if (moves[i] === "x")
                    opponent.push(i);
                else if (moves[i] === "--")
                    blank.push(i);
            }
        }

        if (opponent.length === 1) {

            let squareID = parseInt(blank[getRandomInt(blank.length)]);
            const square = document.getElementById(squareID);

            if (AI.icon === "x") {
                square.style.backgroundImage = "url('x.svg')";
                AI.moves[squareID] = "x";
            }
            else {
                square.style.backgroundImage = "url('o.svg')";
                AI.moves[squareID] = "o";
            }
        }
        else {
            // Rows
            // 0 1  -> is 2 blank ? place : don't
            // 0 2   -> is 1 blank ? place : don't
            // 1 2  -> is 0 blank ? place : don't
            if (opponent.includes(0) && opponent.includes(1)) {

                if (blank.includes(2)) {
                    const square = document.getElementById(2);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[2] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[2] = "o";
                    }
                }
            }
            else if (opponent.includes(0) && opponent.includes(2)) {
                if (blank.includes(1)) {
                    const square = document.getElementById(1);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[1] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[1] = "o";
                    }
                }
            }
            else if (opponent.includes(1) && opponent.includes(2)) {
                if (blank.includes(0)) {
                    const square = document.getElementById(0);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[0] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[0] = "o";
                    }
                }
            }


            // 3 4  -> is 5 blank ? place : don't
            // 3 5  -> is 4 blank ? place : don't
            // 4 5  -> is 3 blank ? place : don't
            if (opponent.includes(3) && opponent.includes(4)) {

                if (blank.includes(5)) {
                    const square = document.getElementById(5);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[5] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[5] = "o";
                    }
                }
            }
            else if (opponent.includes(3) && opponent.includes(5)) {
                if (blank.includes(4)) {
                    const square = document.getElementById(4);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[4] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[4] = "o";
                    }
                }
            }
            else if (opponent.includes(4) && opponent.includes(5)) {
                if (blank.includes(3)) {
                    const square = document.getElementById(3);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[3] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[3] = "o";
                    }
                }
            }


            // 6 7  -> is 8  blank ? place : don't
            // 6 8   -> is 7 blank ? place : don't
            // 7 8  -> is 6 blank ? place : don't
            else if (opponent.includes(6) && opponent.includes(7)) {

                if (blank.includes(8)) {
                    const square = document.getElementById(8);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[8] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[8] = "o";
                    }
                }
            }
            else if (opponent.includes(6) && opponent.includes(8)) {
                if (blank.includes(7)) {
                    const square = document.getElementById(7);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[7] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[7] = "o";
                    }
                }
            }
            else if (opponent.includes(7) && opponent.includes(8)) {
                if (blank.includes(6)) {
                    const square = document.getElementById(6);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[6] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[6] = "o";
                    }
                }
            }

            // Columns
            // 0 3   -> is  6 blank ? place : don't
            // 0 6   -> is 3 blank ? place : don't
            // 3 6  -> is 0 blank ? place : don't
            else if (opponent.includes(0) && opponent.includes(3)) {

                if (blank.includes(6)) {
                    const square = document.getElementById(6);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[6] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[6] = "o";
                    }
                }
            }
            else if (opponent.includes(0) && opponent.includes(6)) {
                if (blank.includes(3)) {
                    const square = document.getElementById(3);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[3] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[3] = "o";
                    }
                }
            }
            else if (opponent.includes(3) && opponent.includes(6)) {
                if (blank.includes(0)) {
                    const square = document.getElementById(0);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[0] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[0] = "o";
                    }
                }
            }

            // 1 4  -> is 7 blank ? place : don't
            // 1 7  -> is 4 blank ? place : don't
            // 4 7  -> is 1 blank ? place : don't
            else if (opponent.includes(1) && opponent.includes(4)) {

                if (blank.includes(7)) {
                    const square = document.getElementById(7);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[7] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[7] = "o";
                    }
                }
            }
            else if (opponent.includes(1) && opponent.includes(7)) {
                if (blank.includes(4)) {
                    const square = document.getElementById(4);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[4] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[4] = "o";
                    }
                }
            }
            else if (opponent.includes(4) && opponent.includes(7)) {
                if (blank.includes(1)) {
                    const square = document.getElementById(1);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[1] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[1] = "o";
                    }
                }
            }

            // 2 5 -> is 8 blank ? place : don't
            // 2 8 -> is 5 blank ? place : don't
            // 5 8 -> is 2 blank ? place : don't
            else if (opponent.includes(2) && opponent.includes(5)) {

                if (blank.includes(8)) {
                    const square = document.getElementById(8);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[8] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[8] = "o";
                    }
                }
            }
            else if (opponent.includes(2) && opponent.includes(8)) {
                if (blank.includes(5)) {
                    const square = document.getElementById(5);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[5] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[5] = "o";
                    }
                }
            }
            else if (opponent.includes(5) && opponent.includes(8)) {
                if (blank.includes(2)) {
                    const square = document.getElementById(2);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[2] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[2] = "o";
                    }
                }
            }

            // Diagonal
            // 0 4  -> is 8 blank ? place : don't
            // 0 8 -> is 4 blank ? place : don't
            // 4 8 -> is 0 blank ? place : don't
            else if (opponent.includes(0) && opponent.includes(4)) {

                if (blank.includes(8)) {
                    const square = document.getElementById(8);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[8] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[8] = "o";
                    }
                }
            }
            else if (opponent.includes(0) && opponent.includes(8)) {
                if (blank.includes(4)) {
                    const square = document.getElementById(5);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[4] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[4] = "o";
                    }
                }
            }
            else if (opponent.includes(4) && opponent.includes(8)) {
                if (blank.includes(0)) {
                    const square = document.getElementById(0);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[0] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[0] = "o";
                    }
                }
            }

            // 2 4 -> is 6 blank ? place : don't
            // 2 6  -> is 4 blank ? place : don't
            // 4 6 -> is 2 blank ? place : don't
            else if (opponent.includes(2) && opponent.includes(4)) {

                if (blank.includes(6)) {
                    const square = document.getElementById(6);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[6] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[6] = "o";
                    }
                }
            }
            else if (opponent.includes(2) && opponent.includes(6)) {
                if (blank.includes(4)) {
                    const square = document.getElementById(5);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[4] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[4] = "o";
                    }
                }
            }
            else if (opponent.includes(4) && opponent.includes(6)) {
                if (blank.includes(2)) {
                    const square = document.getElementById(2);
                    if (AI.icon === "x") {
                        square.style.backgroundImage = "url('x.svg')";
                        AI.moves[2] = "x";
                    }
                    else {
                        square.style.backgroundImage = "url('o.svg')";
                        AI.moves[2] = "o";
                    }
                }
            }

        }

    }

    return { name, icon, score, moves, analyzeMoves };
}
const player1 = player("Wake", "x");
const AI = player("AI", "o");

function AITurn() {

    AI.moves = player1.moves;

    // let indexList = [];
    // for (let i = 0; i < AI.moves.length; i++) {
    //     if (AI.moves[i] === "--")
    //         indexList.push(i);
    // }

    // console.table(indexList);

    // let squareID = parseInt(indexList[getRandomInt(indexList.length)]);
    // const square = document.getElementById(squareID);

    // if (AI.icon === "x") {
    //     square.style.backgroundImage = "url('x.svg')";
    //     AI.moves[squareID] = "x";
    // }
    // else {
    //     square.style.backgroundImage = "url('o.svg')";
    //     AI.moves[squareID] = "o";
    // }

    AI.analyzeMoves();
    playerTurn = !playerTurn;
}

function placeMarker() {

    player1.moves = AI.moves;

    if (playerTurn) {

        if (player1.moves[this.id] === "--") {

            if (player1.icon === "x") {
                this.style.backgroundImage = "url('x.svg')"
                player1.moves[this.id] = "x";
            }
            else {
                this.style.backgroundImage = "url('o.svg')";
                player1.moves[this.id] = "o";
            }

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