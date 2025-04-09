import { Cell } from "./Cell";
import { GenerateBoard } from "./GenerateBoard";

export class Board{
  public board: Cell[][] =[];

  constructor({
    size,
    snakesCount,
    laddersCount
  }:{
    size: number ,
    snakesCount: number,
    laddersCount: number
  }){
    const board = new GenerateBoard();

    this.board = board.generateBoard(size, snakesCount, laddersCount);
  }

  getBoard(){
    return this.board;
  }

}