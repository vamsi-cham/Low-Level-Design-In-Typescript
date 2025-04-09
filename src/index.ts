import { Game } from "./Game";

const snakeAndLadder = new Game({
  playersCount: 3,
  diceCount: 2,
  boardSize: 10,
  snakesCount: 11
});

snakeAndLadder.setGame();
snakeAndLadder.startGame();