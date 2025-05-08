import { Restaurant } from "../Restaurant/Restaurant";
import { RestaurantManager } from "../Restaurant/RestaurantManager";

export interface PickRestaurantStrategy{

  restaurantManager: RestaurantManager;

  pickRestaurant(items: string[]): Restaurant | undefined;
  
}