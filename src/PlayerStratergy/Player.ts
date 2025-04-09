export class Player{
  public id: number;
  public currentPosition: number;
  public isBot: number;

  constructor(isBot: number = 0){
    this.id = Math.floor(Math.random() * 90000) + 10000;
    this.currentPosition = -1;
    this.isBot = isBot;
  }
}