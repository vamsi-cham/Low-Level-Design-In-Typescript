
import { Level } from "../Enums/Level"


export const getLevelWithPoints = (points: number)=>{

  if(points <= 499) return Level.BRONZE;

  else if(points>=500 && points<=999) return Level.SLIVER;

  else return Level.GOLD;

}