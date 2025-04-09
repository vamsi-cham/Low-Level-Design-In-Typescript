import { Cell } from "../Board/Cell";

export interface Player{
  id: number;
  currentPosition: number;
  isBot: boolean;

  go(board: Cell[][]):void;
}