const grid = document.querySelector(".container");
const buttons = document.querySelectorAll("button")

let gridSize = 16;

createGrid(gridSize);
updateGrid();

function  createGrid(gridSize) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
        cell.addEventListener ("mouseover", () => {
            cell.style = "background: rgb(32, 31, 31); transition: .1s;";
        });
     };
};

function updateGrid () {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let newGridSize = button.className;
            for (let i = 0; i < (newGridSize * newGridSize); i++) {
                const newCell = document.createElement("div");
                newCell.className = "new-cell";
                grid.replaceChild(cell, newCell);
                newCell.addEventListener ("mouseover", () => {
                    newCell.style = "background: rgb(32, 31, 31); transition: .1s;"; 
                });
            };
        });
    });
};