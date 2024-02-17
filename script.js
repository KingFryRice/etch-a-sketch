const grid = document.querySelector(".container");
const buttons = document.querySelectorAll("button")
const holdColumn = document.createElement("div");
holdColumn.className = "grid-column";
const holdRow = document.createElement("div");
holdRow.className = "grid-row";

let gridSize = 16;

createRow(gridSize);
createColumn(gridSize);

function  createRow(gridSize) {
    for (let i = 0; i < (gridSize); i++) {
        const row = document.createElement("div");
        row.className = "row";
        holdRow.appendChild(row);
        grid.appendChild(holdRow);
     }
}

function createColumn(gridSize) {
    for (let j = 0; j < gridSize - 1; j++) {
        const column = document.createElement("div");
        column.className = "column";
        holdColumn.appendChild(column);
        grid.appendChild(holdColumn);
    }
}

//function getGridSize() {
//    buttons.forEach(button  => {
//        button.addEventListener("click", () => {
//            gridSize = button.className;
//            createGrid(gridSize);
//        });
//    });
//};