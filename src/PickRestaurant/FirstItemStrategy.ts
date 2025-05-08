import { Restaurant } from "../Restaurant/Restaurant";
import { RestaurantManager } from "../Restaurant/RestaurantManager";
import { PickRestaurantStrategy } from "./PickRestaurantStrategy";

export class FirstItemStrategy implements PickRestaurantStrategy{

    public restaurantManager: RestaurantManager;
    
        constructor(restaurantManager: RestaurantManager){
          this.restaurantManager = restaurantManager;
        }
    
        pickRestaurant(items: string[]): Restaurant | undefined{

          const restaurants = this.restaurantManager.restaurants.get(items[0]);

          if(!restaurants){
            console.log('\nItem(s) not found, ORDER REJECTED');
          }
    
          else
           return restaurants[0];
    
        }
}