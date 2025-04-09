import { Cell } from "../Board/Cell";
import { Dice } from "../Dice/Dice";
import log from "../logger";
import { Player } from "./Player";
import { snakeOrLadderChecker } from "../helper/snakeOrLadderChecker";

export class Human implements Player{
  public id: number;
  public currentPosition: number;
  public isBot: boolean;

  constructor(){

    this.id = Math.floor(Math.random() * 90000) + 10000;
    this.currentPosition = -1;
    this.isBot = false;

  }

  go(board: Cell[][]){

    const boardSize = board.length;

    console.log('\nYour Turn - ',this.id)

    const dice = new Dice();

    const value = dice.rollDice()

    console.log('Rolling.... ', value)

    this.currentPosition += value;

    console.log('New position - ', this.currentPosition)

    snakeOrLadderChecker(this, board, boardSize);

  }
}