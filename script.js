let playerTurn = true;
let winner = false;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let moves = [
    "--", "--", "--",
    "--", "--", "--",
    "--", "--", "--"
];

function initMoves() {
    moves = [
        "--", "--", "--",
        "--", "--", "--",
        "--", "--", "--"
    ];

}

// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let modalCloseButton = document.getElementsByClassName("close")[0];
modalCloseButton.onclick = function () {
    modal.style.display = "none";
    winner = false;
    playerTurn = true;

    const winText = document.querySelector(".winText");
    while (winText.firstChild)
        winText.removeChild(winText.firstChild);
}


const player = (playerName, playerIcon) => {

    let name = playerName;
    let icon = playerIcon;
    let score = 0;
    let blank = [];
    let opponent = [];
    let mine = [];

    const draw = () => {
        const text = document.createTextNode("Draw!");
        const winText = document.querySelector(".winText");
        winText.append(text);
        modal.style.display = "flex";
        winner = true;

        const gridContainer = document.querySelector("#gridContainer");

        while (gridContainer.firstChild)
            gridContainer.removeChild(gridContainer.firstChild);

        initMoves();
        drawGrid();
    }

    const filterBoard = () => {

        blank = [];
        opponent = [];
        mine = [];

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

        if(blank.length === 0)
        draw();
    }
    const changeIcon = (newIcon) => {
        icon = newIcon;
    }
    const randomMove = () => {
        let squareID = parseInt(blank[getRandomInt(blank.length)]);
        const square = document.getElementById(squareID);

        if (icon === "x")
            square.style.backgroundImage = "url('x.svg')";
        else
            square.style.backgroundImage = "url('o.svg')";

        moves[squareID] = icon;
    }

    const wonGame = () => {

        const text = document.createTextNode(playerName + " Won!");
        const winText = document.querySelector(".winText");
        winText.append(text);
        modal.style.display = "flex";
        winner = true;

        const gridContainer = document.querySelector("#gridContainer");

        while (gridContainer.firstChild)
            gridContainer.removeChild(gridContainer.firstChild);

        initMoves();
        drawGrid();

    }

    const checkForDefensiveMoves = () => {
        // Row A
        // 0 1  -> 2
        if (opponent.includes(0) && opponent.includes(1) && blank.includes(2)) {

            const square = document.getElementById(2);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[2] = icon;
        }
        // 0 2   ->  1 
        else if (opponent.includes(0) && opponent.includes(2) && blank.includes(1)) {

            const square = document.getElementById(1);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[1] = icon;
        }
        // 1 2  -> is 0 
        else if (opponent.includes(1) && opponent.includes(2) && blank.includes(0)) {

            const square = document.getElementById(0);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[0] = icon;
        }
        // Row B
        // 3 4 -> 5
        else if (opponent.includes(3) && opponent.includes(4) && blank.includes(5)) {

            const square = document.getElementById(5);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[5] = icon;
        }
        // 3 5 -> 4 
        else if (opponent.includes(3) && opponent.includes(5) && blank.includes(4)) {

            const square = document.getElementById(4);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[4] = icon;
        }
        // 4 5 -> 3 
        else if (opponent.includes(4) && opponent.includes(5) && blank.includes(3)) {

            const square = document.getElementById(3);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[3] = icon;
        }
        // Row C
        // 6 7 -> 8
        else if (opponent.includes(6) && opponent.includes(7) && blank.includes(8)) {

            const square = document.getElementById(8);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[8] = icon;
        }
        // 6 8 -> 7 
        else if (opponent.includes(6) && opponent.includes(8) && blank.includes(7)) {

            const square = document.getElementById(7);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[7] = icon;
        }
        // 7 8 -> 6 
        else if (opponent.includes(7) && opponent.includes(8) && blank.includes(6)) {

            const square = document.getElementById(6);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[6] = icon;
        }
        // Column A
        // 0 3 -> 6
        else if (opponent.includes(0) && opponent.includes(3) && blank.includes(6)) {

            const square = document.getElementById(6);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[6] = icon;
        }
        // 0 6 -> 3 
        else if (opponent.includes(0) && opponent.includes(6) && blank.includes(3)) {

            const square = document.getElementById(3);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[3] = icon;
        }
        // 3 6 -> 0 
        else if (opponent.includes(3) && opponent.includes(6) && blank.includes(0)) {

            const square = document.getElementById(0);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[0] = icon;
        }
        // Column B
        // 1 4 -> 7
        else if (opponent.includes(1) && opponent.includes(4) && blank.includes(7)) {

            const square = document.getElementById(7);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[7] = icon;
        }
        // 1 7 -> 4 
        else if (opponent.includes(1) && opponent.includes(7) && blank.includes(4)) {

            const square = document.getElementById(4);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[4] = icon;
        }
        // 4 7 -> 1 
        else if (opponent.includes(4) && opponent.includes(7) && blank.includes(1)) {

            const square = document.getElementById(1);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[1] = icon;
        }
        // Column C
        // 2 5 -> 8
        else if (opponent.includes(2) && opponent.includes(5) && blank.includes(8)) {

            const square = document.getElementById(8);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[8] = icon;
        }
        // 2 8 -> 5 
        else if (opponent.includes(2) && opponent.includes(8) && blank.includes(5)) {

            const square = document.getElementById(5);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[5] = icon;
        }
        // 5 8 -> 2 
        else if (opponent.includes(5) && opponent.includes(8) && blank.includes(2)) {

            const square = document.getElementById(2);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[2] = icon;
        }
        // Diagonal A
        // 0 4 -> 8
        else if (opponent.includes(0) && opponent.includes(4) && blank.includes(8)) {

            const square = document.getElementById(8);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[8] = icon;
        }
        // 0 8 -> 4 
        else if (opponent.includes(0) && opponent.includes(8) && blank.includes(4)) {

            const square = document.getElementById(4);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[4] = icon;
        }
        // 4 8 -> 0 
        else if (opponent.includes(4) && opponent.includes(8) && blank.includes(0)) {

            const square = document.getElementById(0);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[0] = icon;
        }
        // Diagonal B
        // 2 4 -> 6
        else if (opponent.includes(2) && opponent.includes(4) && blank.includes(6)) {

            const square = document.getElementById(6);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[6] = icon;
        }
        // 2 6 -> 4 
        else if (opponent.includes(2) && opponent.includes(6) && blank.includes(4)) {

            const square = document.getElementById(4);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[4] = icon;
        }
        // 4 6 -> 2 
        else if (opponent.includes(4) && opponent.includes(6) && blank.includes(2)) {

            const square = document.getElementById(2);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[2] = icon;
        }
        else {
            //alert("No Defensive Moves!");
            randomMove();
        }
    }

    const checkForOffensiveMoves = () => {
        // Row A
        // 0 1 -> 2
        if (mine.includes(0) && mine.includes(1) && blank.includes(2)) {

            const square = document.getElementById(2);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[2] = icon;

            wonGame();
        }
        // 0 2 -> 1 
        else if (mine.includes(0) && mine.includes(2) && blank.includes(1)) {

            const square = document.getElementById(1);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[1] = icon;

            wonGame();
        }
        // 1 2 -> 0 
        else if (mine.includes(1) && mine.includes(2) && blank.includes(0)) {

            const square = document.getElementById(0);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[0] = icon;

            wonGame();
        }
        // Row B
        // 3 4 -> 5
        else if (mine.includes(3) && mine.includes(4) && blank.includes(5)) {

            const square = document.getElementById(5);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[5] = icon;

            wonGame();
        }
        // 3 5 -> 4 
        else if (mine.includes(3) && mine.includes(5) && blank.includes(4)) {

            const square = document.getElementById(4);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[4] = icon;

            wonGame();
        }
        // 4 5 -> 3 
        else if (mine.includes(4) && mine.includes(5) && blank.includes(3)) {

            const square = document.getElementById(3);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[3] = icon;

            wonGame();
        }
        // Row C
        // 6 7 -> 8
        else if (mine.includes(6) && mine.includes(7) && blank.includes(8)) {

            const square = document.getElementById(8);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[8] = icon;

            wonGame();
        }
        // 6 8 -> 7 
        else if (mine.includes(6) && mine.includes(8) && blank.includes(7)) {

            const square = document.getElementById(7);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[7] = icon;

            wonGame();
        }
        // 7 8 -> 6 
        else if (mine.includes(7) && mine.includes(8) && blank.includes(6)) {

            const square = document.getElementById(6);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[6] = icon;

            wonGame();
        }
        // Column A
        // 0 3 -> 6
        else if (mine.includes(0) && mine.includes(3) && blank.includes(6)) {

            const square = document.getElementById(6);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[6] = icon;

            wonGame();
        }
        // 0 6 -> 3 
        else if (mine.includes(0) && mine.includes(6) && blank.includes(3)) {

            const square = document.getElementById(3);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[3] = icon;

            wonGame();
        }
        // 3 6 -> 0 
        else if (mine.includes(3) && mine.includes(6) && blank.includes(0)) {

            const square = document.getElementById(0);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[0] = icon;

            wonGame();
        }
        // Column B
        // 1 4 -> 7
        else if (mine.includes(1) && mine.includes(4) && blank.includes(7)) {

            const square = document.getElementById(7);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[7] = icon;

            wonGame();
        }
        // 1 7 -> 4 
        else if (mine.includes(1) && mine.includes(7) && blank.includes(4)) {

            const square = document.getElementById(4);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[4] = icon;

            wonGame();
        }
        // 4 7 -> 1 
        else if (mine.includes(4) && mine.includes(7) && blank.includes(1)) {

            const square = document.getElementById(1);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[1] = icon;

            wonGame();
        }
        // Column C
        // 2 5 -> 8
        else if (mine.includes(2) && mine.includes(5) && blank.includes(8)) {

            const square = document.getElementById(8);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[8] = icon;

            wonGame();
        }
        // 2 8 -> 5 
        else if (mine.includes(2) && mine.includes(8) && blank.includes(5)) {

            const square = document.getElementById(5);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[5] = icon;

            wonGame();
        }
        // 5 8 -> 2 
        else if (mine.includes(5) && mine.includes(8) && blank.includes(2)) {

            const square = document.getElementById(2);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[2] = icon;

            wonGame();
        }
        // Diagonal A
        // 0 4 -> 8
        else if (mine.includes(0) && mine.includes(4) && blank.includes(8)) {

            const square = document.getElementById(8);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[8] = icon;

            wonGame();
        }
        // 0 8 -> 4 
        else if (mine.includes(0) && mine.includes(8) && blank.includes(4)) {

            const square = document.getElementById(4);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[4] = icon;

            wonGame();
        }
        // 4 8 -> 0 
        else if (mine.includes(4) && mine.includes(8) && blank.includes(0)) {

            const square = document.getElementById(0);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[0] = icon;

            wonGame();
        }
        // Diagonal B
        // 2 4 -> 6
        else if (mine.includes(2) && mine.includes(4) && blank.includes(6)) {

            const square = document.getElementById(6);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[6] = icon;

            wonGame();
        }
        // 2 6 -> 4 
        else if (mine.includes(2) && mine.includes(6) && blank.includes(4)) {

            const square = document.getElementById(4);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[4] = icon;

            wonGame();
        }
        // 4 6 -> 2 
        else if (mine.includes(4) && mine.includes(6) && blank.includes(2)) {

            const square = document.getElementById(2);
            if (icon === "x")
                square.style.backgroundImage = "url('x.svg')";
            else
                square.style.backgroundImage = "url('o.svg')";

            moves[2] = icon;

            wonGame();
        }
        else {
            //alert("No Offensive Moves!");
            checkForDefensiveMoves();
        }
    }

    const checkForWinningMoves = () => {

        mine = [];
        for (let i = 0; i < moves.length; i++) {

            if (moves[i] === player1.icon)
                mine.push(i);
        }

        // Row A
        // 0 1 2
        if ((mine.includes(0) && mine.includes(1) && mine.includes(2)))
            wonGame();
        // Row B
        // 3 4 5
        else if (mine.includes(3) && mine.includes(4) && mine.includes(5))
            wonGame();
        // Row C
        // 6 7 8 
        else if (mine.includes(6) && mine.includes(7) && mine.includes(8))
            wonGame();

        // Column A
        // 0 3 6
        else if (mine.includes(0) && mine.includes(3) && mine.includes(6))
            wonGame();
        // Column B
        // 1 4 7
        else if (mine.includes(1) && mine.includes(4) && mine.includes(7))
            wonGame();
        // Column C
        // 2 5 8
        else if (mine.includes(2) && mine.includes(5) && mine.includes(8))
            wonGame();

        // Diagonal A
        // 0 4 8
        else if (mine.includes(0) && mine.includes(4) && mine.includes(8))
            wonGame();
        // Diagonal B
        // 2 4 6
        else if (mine.includes(2) && mine.includes(4) && mine.includes(6))
            wonGame();
    }

    const analyzeMoves = () => {
        filterBoard();
        if (opponent.length === 1)
            randomMove();
        else {
            checkForOffensiveMoves();
        }
    }

    return { name, icon, score, moves, analyzeMoves, checkForWinningMoves, changeIcon };
}

const player1 = player("Player", "x");
const AI = player("AI", "o");

function AITurn() {

    if (!winner) {
        AI.analyzeMoves();
        playerTurn = !playerTurn;
    }
}

function placeMarker() {

    player1.moves = AI.moves;

    if (playerTurn) {

        if (moves[this.id] === "--") {

            if (player1.icon === "x")
                this.style.backgroundImage = "url('x.svg')";
            else
                this.style.backgroundImage = "url('o.svg')";

            moves[this.id] = player1.icon;

            player1.checkForWinningMoves();

            playerTurn = !playerTurn;
            AITurn();
        }
        else {
            alert("Can't Move There!");
        }
    }
}

function changeIcon() {
    if (this.getAttribute("id") === "x") {
        player1.icon = "x";
        AI.changeIcon("o");
    }
    else if (this.getAttribute("id") === "o") {
        player1.icon = "o";
        AI.changeIcon("x")
    }
}

function drawGrid() {
    const gridContainer = document.querySelector("#gridContainer");
    const maxSquares = 9;

    for (let i = 0; i < maxSquares; i++) {
        let square = document.createElement('div');
        square.classList.add("container");
        square.style.backgroundImage = "url('blank.svg')";
        square.setAttribute("id", i);
        square.addEventListener("mousedown", placeMarker);

        switch (i) {
            case 0:
                square.style.borderRight = "1px solid rgb(214, 0, 107)";
                break;
            case 2:
                square.style.borderLeft = "1px solid rgb(214, 0, 107)";
                break;
            case 3:
                square.style.borderTop = "1px solid rgb(214, 0, 107)";
                square.style.borderRight = "1px solid rgb(214, 0, 107)";
                square.style.borderBottom = "1px solid rgb(214, 0, 107)";
                break;
            case 4:
                square.style.borderTop = "1px solid rgb(214, 0, 107)";
                square.style.borderBottom = "1px solid rgb(214, 0, 107)";
                break;
            case 5:
                square.style.borderTop = "1px solid rgb(214, 0, 107)";
                square.style.borderLeft = "1px solid rgb(214, 0, 107)";
                square.style.borderBottom = "1px solid rgb(214, 0, 107)";
                break;
            case 6:
                square.style.borderRight = "1px solid rgb(214, 0, 107)";
                break;
            case 8:
                square.style.borderLeft = "1px solid rgb(214, 0, 107)";
                break;
        }
        gridContainer.appendChild(square);
    }

    const buttons = document.querySelectorAll(".iconButtons")
    buttons.forEach(button => button.addEventListener("mousedown", changeIcon));
}

window.onload = drawGrid();