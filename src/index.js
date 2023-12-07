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
playerOneShips.classList.add('player-ships');
playerOneShips.textContent = 'Player Ships Remaining: ';
score.appendChild(playerShips);

const computerShips = document.createElement('div');
playerTwoShips.classList.add('computer-ships');
playerTwoShips.textContent = 'Computer Ships Remaining: ';
score.appendChild(computerShips);

// (d) Create a button element within the header
const newGameButton = document.createElement('button');
newGameButton.textContent = 'New Game';
newGameButton.classList.add('new-game-button');
header.appendChild(newGameButton);

// Create a game element within the container
const game = document.createElement('div');
game.classList.add('game');
container.appendChild(game);

// Create a ship tracker element within the game
const shipTracker = document.createElement('div');
shipTracker.classList.add('ship-tracker');
game.appendChild(shipTracker);

// Create segments for the player and the computer in the ship tracker
const playerShipTracker = document.createElement('div');
playerShipTracker.classList.add('player-ship-tracker');
shipTracker.appendChild(playerShipTracker);

const computerShipTracker = document.createElement('div');
computerShipTracker.classList.add('computer-ship-tracker');
shipTracker.appendChild(computerShipTracker);

// Create five ship elements for each player's ship tracker with the following names: carrier, battleship, cruiser, submarine, destroyer
const playerCarrier = document.createElement('div');
playerCarrier.classList.add('player-carrier');
playerShipTracker.appendChild(playerCarrier);

const playerBattleship = document.createElement('div');
playerBattleship.classList.add('player-battleship');
playerShipTracker.appendChild(playerBattleship);

const playerCruiser = document.createElement('div');
playerCruiser.classList.add('player-cruiser');
playerShipTracker.appendChild(playerCruiser);

const playerSubmarine = document.createElement('div');
playerSubmarine.classList.add('player-submarine');
playerShipTracker.appendChild(playerSubmarine);

const playerDestroyer = document.createElement('div');
playerDestroyer.classList.add('player-destroyer');
playerShipTracker.appendChild(playerDestroyer);

const computerCarrier = document.createElement('div');
computerCarrier.classList.add('computer-carrier');
computerShipTracker.appendChild(computerCarrier);

const computerBattleship = document.createElement('div');
computerBattleship.classList.add('computer-battleship');
computerShipTracker.appendChild(computerBattleship);

const computerCruiser = document.createElement('div');
computerCruiser.classList.add('computer-cruiser');
computerShipTracker.appendChild(computerCruiser);

const computerSubmarine = document.createElement('div');
computerSubmarine.classList.add('computer-submarine');
computerShipTracker.appendChild(computerSubmarine);

const computerDestroyer = document.createElement('div');
computerDestroyer.classList.add('computer-destroyer');
computerShipTracker.appendChild(computerDestroyer);

// Create a game board element within the game
const gameBoard = document.createElement('div');
gameBoard.classList.add('game-board');
game.appendChild(gameBoard);

/* Create the individual cells for the game board which will be organized in a grid using CSS. The game board will be a 10x10 grid with the 
rows labeled 1-10 and the columns labeled A-J. Each cell will have a unique id that will be used to identify the cell when the user clicks on it. */

for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    const colLetter = String.fromCharCode(64 + col);
    cell.id = `${colLetter}${row}`;
    gameBoard.appendChild(cell);
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
