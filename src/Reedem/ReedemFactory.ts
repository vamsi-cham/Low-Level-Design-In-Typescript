import { Level } from "../Enums/Level";
import { BronzeReedem } from "./BronzeReedem";
import { GoldReedem } from "./GoldReedem";
import { SliverReedem } from "./SliverReedem";

export class ReedemFactory{

  createReedemLevel(level: Level){

    switch (level) {
      case Level.BRONZE:
        
        return new BronzeReedem();

      case Level.SLIVER:
        
        return new SliverReedem();
    
      case Level.GOLD:
        
        return new GoldReedem();

      default:
        throw new Error("Invalid level");
    }

  }
}