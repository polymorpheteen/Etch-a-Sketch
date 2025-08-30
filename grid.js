const TOTAL_SIZE = 500;
const DEFAULT_SIZE = 16;
const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".btn.new-grid-btn");
const clearBtn = document.querySelector(".btn.clear-btn");
const colorPicker = document.querySelector("input#color-picker");

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function reloadGrid() {
  clearGrid();
  createGrid(DEFAULT_SIZE);
}

function clearGrid() {
  container.innerText = "";
}

function createGrid(squaresPerSide) {
  clearGrid();
  const defaultColor = "#000";
  let color = colorPicker.value;

  window.addEventListener("load", () => {
    color = defaultColor;
    colorPicker.value = defaultColor;
  });

  colorPicker.addEventListener("input", (e) => {
    color = e.target.value;
  });

  for (let i = 1; i <= squaresPerSide * squaresPerSide; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.width = TOTAL_SIZE / squaresPerSide + "px";
    div.style.height = TOTAL_SIZE / squaresPerSide + "px";

    div.addEventListener("click", () => {
      div.style.backgroundColor = color;
    });
    container.appendChild(div);
  }
}

newGridBtn.addEventListener("click", () => {
  let size = prompt("Enter number of squares per side:");

  size = parseInt(size);

  if (isNaN(size) || size <= 0 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  createGrid(size);
});

clearBtn.addEventListener("click", () => {
  reloadGrid();
});

createGrid(DEFAULT_SIZE);
