const grid = document.querySelector(".container");
const buttons = document.querySelectorAll("button")

let gridSize = 16;

createRow(gridSize);

function  createRow(gridSize) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);
     }
}