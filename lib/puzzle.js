// Select all the tiles
const tiles = document.querySelectorAll('td');
const emptyTile = document.querySelector(".empty");

const canMove = (tile) => {
  // TODO: Check if a tile has an empty neighbour
  const emptyTile = document.querySelector(".empty");
  const emptyTileParent = emptyTile.parentElement;
  const cellEmptyTile = emptyTile.cellIndex;
  const rowEmptyTile = emptyTileParent.rowIndex;

  const cellTile = tile.cellIndex;
  const tileParent = tile.parentElement;
  const rowTile = tileParent.rowIndex;

  const cellOk = cellTile === cellEmptyTile;
  const rowOk = rowTile === rowEmptyTile;
  if (cellOk || rowOk) {
    return true;
  }
  return false;
};

const moveTile = (element) => {
  // TOOD: Move the tile
  const elementNumber = element.innerText;
  const emptyTile = document.querySelector(".empty");
  emptyTile.innerHTML = elementNumber;
  element.classList.add("empty");
  emptyTile.classList.remove("empty");
  element.innerText = "";
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
  // let verif = [];
  // const table = document.querySelector("tbody");
  // table.innerText.forEach((element) => {

  // })
};

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
