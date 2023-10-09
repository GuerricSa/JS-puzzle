// Select all the tiles
const tiles = document.querySelectorAll('td');
const emptyTile = document.querySelector(".empty");
const winner = document.querySelector('#winner');

const canMove = (tile) => {
  // TODO: Check if a tile has an empty neighbour
  const emptyTile = document.querySelector(".empty");
  const emptyTileParent = emptyTile.parentElement;
  const cellEmptyTile = emptyTile.cellIndex;
  const rowEmptyTile = emptyTileParent.rowIndex;

  const cellTile = tile.cellIndex;
  const tileParent = tile.parentElement;
  const rowTile = tileParent.rowIndex;

  if (cellTile === cellEmptyTile) {
    if (rowTile === rowEmptyTile + 1 || rowTile === rowEmptyTile - 1) {
      return true;
    }
  } else if (rowTile === rowEmptyTile) {
    if (cellTile === cellEmptyTile + 1 || cellTile === cellEmptyTile - 1) {
      return true;
    }
  } else {
    return false
  }
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
  let test = true
  const tilesArray = Array.from(tiles);
  const tilesText = tilesArray.map(element => element.innerText);
  const tilesTextWithoutEmpty = tilesText.filter(element => element !== "");
  tilesTextWithoutEmpty.forEach((element) => {
    const numberInTile = Number.parseInt(element, 10);
    const numberIndex = tilesTextWithoutEmpty.indexOf(element);
    const nextNumber = Number.parseInt(tilesTextWithoutEmpty[numberIndex + 1], 10);
    if (numberInTile > nextNumber) {
      test = false
    }
  });
  console.log(test)
  if (test) {
    winner.style.display = "block";
  }
};

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
