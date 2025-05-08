import { Restaurant } from "../Restaurant/Restaurant";
import { RestaurantManager } from "../Restaurant/RestaurantManager";
import { PickRestaurantStrategy } from "./PickRestaurantStrategy";

export class LowPriceStrategy implements PickRestaurantStrategy{

    public restaurantManager: RestaurantManager;

    constructor(restaurantManager: RestaurantManager){
      this.restaurantManager = restaurantManager;
    }

    pickRestaurant(items: string[]): Restaurant | undefined{

      throw Error('not implemented')

    }
}