export class Dice{
  public numberOfDice: number;

  constructor(numberOfDice: number = 1){
    this.numberOfDice = numberOfDice;
  }

  rollDice(){

    let totalCount = 0;

    let i = 0;

    while(i < this.numberOfDice){
      totalCount += Math.floor(Math.random() * 6) + 1;
      i++;
    }

    return  totalCount;
  }
}