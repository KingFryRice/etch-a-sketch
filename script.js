const grid = document.querySelector(".container");
const buttons = document.querySelectorAll("button")

let gridSize = 16;

createGrid(gridSize);

function  createGrid(gridSize) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const cell = document.createElement("div");
        cell.className = "row";
        grid.appendChild(cell);
        cell.addEventListener ("mouseover", () => {
            cell.style = "background: black; transition: .1s;";
        });
     };
};