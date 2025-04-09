import { generateBoard } from "../helper/generateBoard";
import { Cell } from "./Cell";

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

    this.board = generateBoard(size, snakesCount, laddersCount);
  }

  getBoard(){
    return this.board;
  }

}