const gameBord = document.querySelector(".game__board");
const messagePlayer = document.querySelector(".game__turn");

//console.log(messagePlayer);

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

const players = {
  x: "cross",
  o: "circle",
};

let isTurnX = true;
let currentTurns = 0;
let maxTurns = 9;

document.addEventListener("DOMContentLoaded", function () {
  startGame();
});

//  function of starting the game //

function startGame() {
  createBoard();

  messagePlayer.textContent = "X";
}

// function that creates the dashboard //

function createBoard() {
  const cells = 9;

  while (gameBord.firstElementChild) {
    gameBord.firstElementChild.remove();
  }

  for (let i = 0; i < cells; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("click", handleCell, {
      once: true,
    });

    gameBord.append(div);
  }
}

function handleCell(event) {
  const currentCell = event.currentTarget;
  const currentPlayer = isTurnX ? players.x : players.o;
  currentTurns++;

  drawShape(currentCell, currentPlayer);

  changeTurn();
}

function drawShape(element, shape) {
  element.classList.add(shape);
}

function changeTurn() {
  isTurnX = !isTurnX;
  messagePlayer.textContent = isTurnX ? "X" : "O";
}
