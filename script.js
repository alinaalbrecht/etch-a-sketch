let gridWrapper = document.querySelector(".grid-wrapper");
let changeGridButton = document.querySelector(".change-grid");
let clearGridButton = document.querySelector(".clear-grid");
let etchASketch = document.querySelector(".etch-a-sketch");

changeGridButton.addEventListener("click", changeGridNum);
clearGridButton.addEventListener("click", clearGrid);

window.onload = generateGrid(16);

function generateGrid(num) {
    let divsArr = [];
    let divWidth = 500/num;
    document.documentElement.style.setProperty('--column-number',`${divWidth}px`);
    for (let i = 0; i < (num * num); i++) {
        divsArr[i] = document.createElement("div");
        divsArr[i].classList.add("flex-item")
        gridWrapper.append(divsArr[i]);
    }
    let etchDiv = document.querySelectorAll(".flex-item");
    etchDiv.forEach(div => div.addEventListener("mouseover", changeColor));
}

function changeColor(e) {
    e.target.classList.add("permahover");
}

function changeGridNum() {
    let num = prompt("Please enter a number between 1 and 100");
    if (isNaN(num)) {
        return changeGridNum()
    }
    divWidth = 500 / num;
    clearGrid();
    generateGrid(num);
}

function clearGrid() {
    etchASketch.classList.remove("shake-etch");
    void etchASketch.offsetWidth;
    etchASketch.classList.add("shake-etch");
    let permahover = document.querySelectorAll(".permahover")
    let permaArr = Array.from(permahover);
    permaArr.forEach(div => div.classList.remove("permahover"));
}