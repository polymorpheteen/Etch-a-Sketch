const TOTAL_SIZE = 960;
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

function createGrid(squaresPerSide) {
  container.innerText = "";

  for (let i = 1; i <= squaresPerSide * squaresPerSide; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.width = TOTAL_SIZE / squaresPerSide + "px";
    div.style.height = TOTAL_SIZE / squaresPerSide + "px";

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
}

button.addEventListener("click", () => {
  let size = prompt("Enter number of squares per side:");

  size = parseInt(size);

  if (isNaN(size) || size <= 0 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  createGrid(size);
});

createGrid(16);
