import { Cell } from "../Board/Cell";
import log from "../logger";
import { Player } from "./Player";
import { snakeOrLadderChecker } from "../helper/snakeOrLadderChecker";

export class Bot implements Player{
  public id: number;
  public currentPosition: number;
  public isBot: boolean;

  constructor(){

    this.id = Math.floor(Math.random() * 90000) + 10000;
    this.currentPosition = -1;
    this.isBot = true;

  }

  go(board: Cell[][]){

    const boardSize = board.length;

    console.log('\nBot turn ',this.id)

    console.log('Rolling.... ', 1)

    this.currentPosition += 1;

    console.log('New position - ', this.currentPosition)

    snakeOrLadderChecker(this, board, boardSize);

  }
}