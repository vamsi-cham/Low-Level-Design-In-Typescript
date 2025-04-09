import { Board } from "./Board/Board";
import { Cell } from "./Board/Cell";
import { Dice } from "./Dice/Dice";
import log from "./logger";
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
        const player = new Player(1);
        log.info('Player: ', player.id)
        this.players.push(player);
      } 
      else{
        const player = new Player();
        log.info('Player: ', player.id)
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

    const dice = new Dice(this.diceCount);

    while(1){
      const player = this.players.shift();

      if(!player) throw Error('error occured')

      log.info('Your Turn - ',player.id)

      const value = dice.rollDice()

      log.info('Rolling.... ', value)

      player.currentPosition += value;

      log.info('You moved to - ', player.currentPosition)

      if(player.currentPosition >= this.boardSize*this.boardSize-1) {

        log.info('Winner Winner Snake Dinner: ', player.id);

        return;
      }

      const x = Math.floor(player.currentPosition/this.boardSize);

      const y = (player.currentPosition%this.boardSize);

      //log.debug("poistion: ", x ,y)

      if(this.board[x][y].goTo) {

        player.currentPosition = this.board[x][y].goTo;

        log.info('But due to snake/ladder now moved to- ', player.currentPosition)

      }

      if(player.currentPosition >= this.boardSize*this.boardSize) {

        log.info('Winner Winner Snake Dinner: ', player.id);

        return;
      }

      this.players.push(player);
    }

  }
}