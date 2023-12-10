import './styles.css';

// DOM Manipulation

// Page Load Tasks

// Create a container within the body element
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// Create a header element within the container
const header = document.createElement('header');
header.classList.add('header');
container.appendChild(header);

// (a) Create a logo element within the header
const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'X';
header.appendChild(logo);

// (b) Create a title element within the header
const title = document.createElement('h1');
title.textContent = 'Battleship Game';
header.appendChild(title);

// (c) Create a score element within the header
const score = document.createElement('div');
score.classList.add('score');
header.appendChild(score);

// Pre-populate the score element indicating the number of ships remaining for each player with blanks
const playerShips = document.createElement('div');
playerShips.classList.add('score-text');
playerShips.classList.add('player');
playerShips.textContent = 'Player Ships Remaining: ';
score.appendChild(playerShips);

const playerShipsRemaining = document.createElement('div');
playerShipsRemaining.classList.add('score-value');
playerShipsRemaining.classList.add('player');
playerShipsRemaining.textContent = ' ';
score.appendChild(playerShipsRemaining);

const computerShips = document.createElement('div');
computerShips.classList.add('score-text');
computerShips.classList.add('computer');
computerShips.textContent = 'Computer Ships Remaining: ';
score.appendChild(computerShips);

const computerShipsRemaining = document.createElement('div');
computerShipsRemaining.classList.add('score-value');
computerShipsRemaining.classList.add('computer');
computerShipsRemaining.textContent = ' ';
score.appendChild(computerShipsRemaining);

// (d) Create a button element within the header
const newGameButton = document.createElement('button');
newGameButton.textContent = 'New Game';
newGameButton.classList.add('new-game-button');
header.appendChild(newGameButton);

// Create a game element within the container
const game = document.createElement('div');
game.classList.add('game');
container.appendChild(game);

// Create a team element with sub-elements to label the player vs. the computer side in the game
const team = document.createElement('div');
team.classList.add('team');
game.appendChild(team);

const playerTeam = document.createElement('div');
playerTeam.classList.add('player-team');
playerTeam.textContent = 'Player';
team.appendChild(playerTeam);

const computerTeam = document.createElement('div');
computerTeam.classList.add('computer-team');
computerTeam.textContent = 'Computer';
team.appendChild(computerTeam);

// Create a ship tracker element within the game
const shipTracker = document.createElement('div');
shipTracker.classList.add('ship-tracker');
game.appendChild(shipTracker);

// Create segments for the player and the computer in the ship tracker
const playerShipLegend = document.createElement('div');
playerShipLegend.classList.add('player-ship-legend');
shipTracker.appendChild(playerShipLegend);

const computerShipLegend = document.createElement('div');
computerShipLegend.classList.add('computer-ship-legend');
shipTracker.appendChild(computerShipLegend);

// Create five ship elements for each player's ship tracker with the following names: carrier, battleship, cruiser, submarine, destroyer
const playerCarrier = document.createElement('div');
playerCarrier.classList.add('player-tracker');
playerCarrier.classList.add('carrier');
playerCarrier.textContent = '•'.repeat(5);
playerShipLegend.appendChild(playerCarrier);

const playerBattleship = document.createElement('div');
playerBattleship.classList.add('player-tracker');
playerBattleship.classList.add('battleship');
playerBattleship.textContent = '•'.repeat(4);
playerShipLegend.appendChild(playerBattleship);

const playerCruiser = document.createElement('div');
playerCruiser.classList.add('player-tracker');
playerCruiser.classList.add('cruiser');
playerCruiser.textContent = '•'.repeat(3);
playerShipLegend.appendChild(playerCruiser);

const playerSubmarine = document.createElement('div');
playerSubmarine.classList.add('player-tracker');
playerSubmarine.classList.add('submarine');
playerSubmarine.textContent = '•'.repeat(3);
playerShipLegend.appendChild(playerSubmarine);

const playerDestroyer = document.createElement('div');
playerDestroyer.classList.add('player-tracker');
playerDestroyer.classList.add('destroyer');
playerDestroyer.textContent = '•'.repeat(2);
playerShipLegend.appendChild(playerDestroyer);

const computerCarrier = document.createElement('div');
computerCarrier.classList.add('computer-tracker');
computerCarrier.classList.add('carrier');
computerCarrier.textContent = '•'.repeat(5);
computerShipLegend.appendChild(computerCarrier);

const computerBattleship = document.createElement('div');
computerBattleship.classList.add('computer-tracker');
computerBattleship.classList.add('battleship');
computerBattleship.textContent = '•'.repeat(4);
computerShipLegend.appendChild(computerBattleship);

const computerCruiser = document.createElement('div');
computerCruiser.classList.add('computer-tracker');
computerCruiser.classList.add('cruiser');
computerCruiser.textContent = '•'.repeat(3);
computerShipLegend.appendChild(computerCruiser);

const computerSubmarine = document.createElement('div');
computerSubmarine.classList.add('computer-tracker');
computerSubmarine.classList.add('submarine');
computerSubmarine.textContent = '•'.repeat(3);
computerShipLegend.appendChild(computerSubmarine);

const computerDestroyer = document.createElement('div');
computerDestroyer.classList.add('computer-tracker');
computerDestroyer.classList.add('destroyer');
computerDestroyer.textContent = '•'.repeat(2);
computerShipLegend.appendChild(computerDestroyer);

// Create a game board element within the game
const gameBoard = document.createElement('div');
gameBoard.classList.add('game-board');
game.appendChild(gameBoard);

// Create two grids within the game board, one for the player and one for the computer
const playerGrid = document.createElement('div');
playerGrid.classList.add('player-grid');
gameBoard.appendChild(playerGrid);

const computerGrid = document.createElement('div');
computerGrid.classList.add('computer-grid');
gameBoard.appendChild(computerGrid);

/* Create the individual cells for the game board which will be organized in a grid using CSS. The game board will be a 10x10 grid with the 
rows labeled 1-10 and the columns labeled A-J. Each cell will have a unique id that will be used to identify the cell when the user clicks on it. */

for (let row = 0; row <= 10; row++) {
  for (let col = 0; col <= 10; col++) {
    const playerCell = document.createElement('div');
    row == 0 || col == 0
      ? playerCell.classList.add('label')
      : playerCell.classList.add('cell');
    const colLetter = col == 0 ? '' : String.fromCharCode(64 + col);
    const rowNumber = row == 0 ? '' : row;
    playerCell.id = `player-${colLetter}${rowNumber}`;
    playerCell.textContent =
      row == 0 || col == 0 ? `${colLetter}${rowNumber}` : '';
    playerGrid.appendChild(playerCell);

    const computerCell = document.createElement('div');
    row == 0 || col == 0
      ? computerCell.classList.add('label')
      : computerCell.classList.add('cell');
    computerCell.id = `computer-${colLetter}${rowNumber}`;
    computerCell.textContent =
      row == 0 || col == 0 ? `${colLetter}${rowNumber}` : '';
    computerGrid.appendChild(computerCell);
  }
}

// Create a footer element within the container
const footer = document.createElement('footer');
footer.classList.add('footer');
container.appendChild(footer);

// Create a message element within the footer
const message = document.createElement('div');
message.classList.add('message');
footer.appendChild(message);
