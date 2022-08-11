
function drawGrid() {
    const gridContainer = document.querySelector("#gridContainer");
    const maxSquares = 9;

    for (let i = 0; i < maxSquares; i++) {
        let square = document.createElement('div');
        square.style.display = "flex";
        square.style.width = "123px";
        square.style.height = "123px";
        square.style.background = "magenta";

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