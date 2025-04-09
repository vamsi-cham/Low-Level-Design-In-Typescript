import { Game } from "./Game";

const snakeAndLadder = new Game({
  playersCount: 2,
  // diceCount: 2,
  boardSize: 6,
  // snakesCount: 1,
  botsCount:1,
});

snakeAndLadder.setGame();
snakeAndLadder.startGame();