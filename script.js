let playerTurn = true;

function placeMarker() {

    if (playerTurn)
        this.style.backgroundImage = "url('o.svg')";
    else
        this.style.backgroundImage = "url('x.svg')"

    playerTurn = !playerTurn;
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