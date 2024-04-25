const gameBord = document.querySelector(".game__board");

// console.log(gameBord);

const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function createBoard() {
  const cells = 9;

  for (let i = 0; i < cells; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("click", handleCell, {
      once: true,
    });

    gameBord.append(div);
  }
}

function handleCell() {
  alert("diste click en el boton");
}

createBoard();
