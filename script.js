const grid = document.querySelector(".container");
const buttons = document.querySelectorAll("button")

let gridSize;

getGridSize();

function getGridSize() {
    buttons.forEach(button  => {
        button.addEventListener("click", () => {
            gridSize = button.className;
            createGrid(gridSize);
        });
    });
};

function  createGrid(gridSize) {
    for (let row = 0; row  < gridSize; row++) {
        for (let column = 0; column < gridSize; column++) {
        const div = document.createElement("div");
        div.className = "grid-item";
        grid.appendChild(div);
        }
    }
}