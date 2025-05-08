import { PickerAlgo } from "../Enum/PickerAlgo";
import { RestaurantManager } from "../Restaurant/RestaurantManager";
import { FirstItemStrategy } from "./FirstItemStrategy";
import { LowPriceStrategy } from "./LowPriceStrategy";

export class PickRestaurantFactory{
  public restaurantManager: RestaurantManager;
  
  constructor(restaurantManager: RestaurantManager){
        this.restaurantManager = restaurantManager;
  }

  pickingAlgo(algo: PickerAlgo){
    switch (algo) {
      case PickerAlgo.LOW_PRICE:
        return new LowPriceStrategy(this.restaurantManager);
      case PickerAlgo.FIRST_ITEM:
        return new FirstItemStrategy(this.restaurantManager);
      default:
        break;
    }
  }
}