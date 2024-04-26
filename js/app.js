const gameBord = document.querySelector(".game__board");
const messagePlayer = document.querySelector(".game__turn");
const endGameResult = document.querySelector(".endgame__result");
const endGameContainer = document.querySelector(".endgame");
const resetGameButton = document.querySelector(".endgame__button");

//console.log(btnReset);

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

//  the game starts when the html loads //

document.addEventListener("DOMContentLoaded", function () {
  startGame();
});

resetGameButton.addEventListener("click", startGame);

//  function of starting the game //

function startGame() {
  createBoard();

  messagePlayer.textContent = "X";
  isTurnX = true;
  currentTurns = 0;
  gameBord.classList.remove("disable");
  endGameContainer.classList.remove("show");
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

// controls cell usage //

function handleCell(event) {
  const currentCell = event.currentTarget;
  const currentPlayer = isTurnX ? players.x : players.o;
  currentTurns++;

  drawShape(currentCell, currentPlayer);

  //  we check if there is a winner //

  if (checkWinner(currentPlayer)) {
    return;
  }

  //  check if there is a tie //

  if (currentTurns === maxTurns) {
    showEndGame(false);
  }

  //  change shift //

  changeTurn();
}

//  draw an x ​​or an o  //

function drawShape(element, shape) {
  element.classList.add(shape);
}

// change current shift //

function changeTurn() {
  isTurnX = !isTurnX;
  messagePlayer.textContent = isTurnX ? "X" : "O";
}

//  check if there is a winner //

function checkWinner(currentPlayer) {
  const cells = document.querySelectorAll(".cell");

  const winner = winningPosition.some(function (winninArray) {
    return winninArray.every(function (position) {
      return cells[position].classList.contains(currentPlayer);
    });
  });

  if (!winner) {
    return undefined;
  }

  showEndGame(winner);
  return true;
}

function showEndGame(winner) {
  gameBord.classList.add("disable");
  endGameContainer.classList.add("show");

  if (winner) {
    endGameResult.textContent = `¡ ${isTurnX ? "X" : "O"} ha ganado el juego!`;
  } else {
    endGameResult.textContent = ` ¡El juego se a empatado!`;
  }
}
