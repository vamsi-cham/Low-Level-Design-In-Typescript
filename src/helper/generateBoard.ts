import { Cell } from "../Board/Cell";
import log from "../logger";
import { arrangeSnakeAndLadders } from "./arrangeSnakeAndLadders";
import { generatePlacesForSnakeAndLadders } from "./generatePlacesForSnakeAndLadders";

export function generateBoard(
  size: number, 
  snakesCount: number, 
  laddersCount: number
): Cell[][]{

  const board: Cell[][] = Array.from({length: size}, ()=> new Array(size));

  const snakesAndLadders = arrangeSnakeAndLadders(snakesCount, laddersCount, size);

  log.debug('snakeAndLadders: ', snakesAndLadders)

  let i =0;
  let count = 0;

  while(i< size){
    let j = 0;
    while(j< size){

      if(snakesAndLadders.has(count)){

        board[i][j] = new Cell(count, snakesAndLadders.get(count));
      }

      else board[i][j] = new Cell(count);

      j++;
      count++;
    }
    i++;
  }

  return board;

}