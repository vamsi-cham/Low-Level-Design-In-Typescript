import { Cell } from "../Board/Cell";
import log from "../logger";
import { Player } from "../PlayerStratergy/Player";

export function snakeOrLadderChecker(player: Player, board: Cell[][], boardSize: number){
      if(player.currentPosition >= boardSize*boardSize-1) return;
      
      const x = Math.floor(player.currentPosition/boardSize);

      const y = (player.currentPosition%boardSize);

      //log.debug("poistion: ", x ,y)

      if(board[x][y].goTo) {

        player.currentPosition = board[x][y].goTo;

        console.log('But due to snake/ladder now moved to- ', player.currentPosition)

      }
}