import { Level } from "../Enums/Level";
import { getLevelWithPoints } from "../helper/getLevelWithPoints";
import { ReedemFactory } from "../Reedem/ReedemFactory";

export class User{

  public username: string;
  protected points:  number;
  protected level: Level;

  constructor(username: string){

    this.username = username,
    this.points = 0;
    this.level = Level.BRONZE

  }

  getPoints(){
    return this.points;
  }

  getLevel(){
    return this.level;
  }

  updatePoints(value: number){
    this.points = value;

    const level = getLevelWithPoints(this.points);

    if(level !== this.level) {
      const updatedLevel = this.updateLevel(level);

      //console.log('Level Updated to: ', updatedLevel);
    } 

    return this.points;
  }

  private updateLevel(level: Level){
    this.level = level;

    return this.level;
  }

  getUserStats(){
    console.log(`\n${this.username} has ${this.points} points. Current level: ${this.level}.`)
  }
}