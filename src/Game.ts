import { Board } from "./Board/Board";
import { Cell } from "./Board/Cell";
import { Dice } from "./Dice/Dice";
import log from "./logger";
import { Bot } from "./PlayerStratergy/Bot";
import { Human } from "./PlayerStratergy/Human";
import { Player } from "./PlayerStratergy/Player";

export class Game{
  public boardSize: number;
  public playersCount: number;
  public botsCount: number;
  public diceCount: number;
  private players: Player[] = [];
  public board: Cell[][] = [];
  public laddersCount: number;
  public snakesCount: number;

  constructor({
    playersCount,
    boardSize =8,
    botsCount =0,
    diceCount=1,
    laddersCount =4,
    snakesCount =4,
  }:{
    playersCount: number,
    boardSize?: number,
    botsCount?: number,
    diceCount?: number,
    laddersCount?: number,
    snakesCount?: number
  }
    
){

    this.boardSize = boardSize;
    this.botsCount = botsCount;
    this.playersCount = playersCount;
    this.diceCount = diceCount;
    this.snakesCount = snakesCount;
    this.laddersCount =laddersCount
  }

  setGame(){
    let count = 0;

    while(count <this.playersCount){

      if(count < this.botsCount){
        const player = new Bot();
        console.log('Bot- ', player.id)
        this.players.push(player);
      } 
      else{
        const player = new Human();
        console.log('Human- ', player.id)
        this.players.push(player);

      }

      count++;
    }

    const boardObj = new Board({
      laddersCount: this.laddersCount,
      snakesCount: this.snakesCount,
      size: this.boardSize
    });

    this.board = boardObj.getBoard();

    //log.debug('Game Board: ', this.board)
  }

  startGame(){

    while(1){
      const player = this.players.shift();

      if(!player) throw Error('error occured')

      player.go(this.board);

      if(player.currentPosition >= this.boardSize*this.boardSize-1) {

        console.log('\nWinner Winner Snake Dinner: ', player.id, player.isBot);

        return;
      }

      this.players.push(player);
    }

  }
}