import log from "../logger";
import { ArrangeSnakeAndLadders } from "./ArrangeSnakeAndLadders";
import { Cell } from "./Cell";
import { GeneratePlacesForSnakeAndLadders } from "./GeneratePlacesForSnakeAndLadders";

export class GenerateBoard{

  generateBoard(size: number, snakesCount: number, laddersCount: number): Cell[][]{

    const board: Cell[][] = Array.from({length: size}, ()=> new Array(size));

    const used = new Set<number>();

    const generator = new GeneratePlacesForSnakeAndLadders(0, size*size-1, used);

    const snakes = generator.generatePlacesForSnakeAndLadders(snakesCount*2);
    const ladders = generator.generatePlacesForSnakeAndLadders(laddersCount*2); 

    const snakesAndLaddersObj = new ArrangeSnakeAndLadders(snakes, ladders);

    const snakesAndLadders = snakesAndLaddersObj.arrangeSnakeAndLadders();

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

}