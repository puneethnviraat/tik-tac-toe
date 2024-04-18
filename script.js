const gridSize = 3;
let count = 0;
let gameBoard = document.querySelector('.tic-tok-toe');
let currentPlayer = 'X';
const game = [
  [, ,],
  [, ,],
  [, ,],
];
function createBoard() {
  for (let j = 0; j < gridSize; j++) {
    let rowRef = document.createElement('div');
    rowRef.className = 'row';

    for (let index = 0; index < gridSize; index++) {
      const cellRef = document.createElement('div');
      cellRef.className = 'cell';
      cellRef.setAttribute('data-row', j);
      cellRef.setAttribute('data-cell', index);

      rowRef.appendChild(cellRef);
    }

    document.querySelector('.tic-tok-toe').appendChild(rowRef);
  }
}
function changePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
function addListner() {
  gameBoard.addEventListener('click', function (e) {
    if (e.target.nodeName === 'DIV') {
      if (e.target.classList.contains('cell')) {
        e.target.innerText = currentPlayer;
        e.target.setAttribute('disabled', 'disabled');
        const rowId = e.target.dataset.row;
        const cellId = e.target.dataset.cell;
        updateGameData(rowId, cellId, currentPlayer);
        changePlayer();
        count++;
      }
    }
  });
}
function getWinner() {
  for (let i = 0; i < game.length; i++) {
    //row values
    if (game[i].length > 2) {
      if (checkLine(game[i])) {
        return true;
      }
    }

    //column values
    const columnValues = game.map((row) => row[i]);
    if (columnValues.length > 2) {
      if (checkLine(columnValues)) {
        return true;
      }
    }
  }
}

function checkLine(arr) {
  if (arr.length == 3) {
    let result = arr.every((data) => arr[0] === data && data !== undefined);
    console.log(result);
    return result;
  }
}

function updateGameData(row, col, value) {
  if (!game[row]) {
    game[row] = [];
  }
  game[row][col] = value;
  if (getWinner()) {
    alert('name=' + currentPlayer);
  }
}
createBoard();
addListner();
