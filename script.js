const grid = document.querySelector(".container");
const buttons = document.querySelectorAll("button")

let gridSize = 16;
let newGridSize;
let buttonClass;

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

function newGrid(newGridSize) {
    for (let j = 0; j < (newGridSize * newGridSize); j++) {
        const newCell = document.createElement("div");
        if (buttonClass === "Small") {
            newCell.className = "small-cell";
        } else if (buttonClass === "Medium") {
            newCell.className = "medium-cell";
        } else {
            newCell.className = "large-cell";
        }
        grid.appendChild(newCell);
        newCell.addEventListener ("mouseover", () => {
            newCell.style = "background: rgb(32, 31, 31); transition: .1s;";
        });
    };
};

function updateGrid () {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            do {
                grid.removeChild(grid.lastChild);
            } while (grid.childElementCount > 0);
            newGridSize = button.className;
            buttonClass = button.textContent;
            console.log(buttonClass);
            console.log(newGridSize);
            newGrid(newGridSize);
        });
    });
};

const rainbowOption = ["red", "orange", "yellow", "green", "blue", "purple"]
const randomColor = rainbowOption[Math.floor(Math.random() * rainbowOption.length)];