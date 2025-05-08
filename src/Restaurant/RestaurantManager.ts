import { Menu } from "./Menu";
import { Restaurant } from "./Restaurant";

export class RestaurantManager{

  public restaurantsList: Map<string, Restaurant>;
  //mistake 1
  public restaurants: Map<string, Restaurant[]| undefined>;

  constructor(){
    this.restaurantsList = new Map();
    this.restaurants = new Map();
  }

  onboardRestaurant(name: string, capacity: number, menu: Menu){

    const restaurant = new Restaurant(name, capacity, menu)

    menu.itemsList.forEach((item)=>{
        this.addRestaurantToItemName(item.name, restaurant);
    })

    this.restaurantsList.set(name, restaurant );
  }

  updatePrice(restaurantName: string, itemName: string, price: number){

    if(!this.restaurantsList.has(restaurantName)){
      console.log('\n NO restaurant found!');
      return
    }

    const restaurant = this.restaurantsList.get(restaurantName);

    if(restaurant){
      restaurant.updateItem(itemName, price);
      this.addRestaurantToItemName(itemName, restaurant);
    }

    console.log('\nMenu: ', restaurant?.menu.getItems());

  }

  addRestaurantToItemName(itemName: string, restaurant: Restaurant){
    if(this.restaurants.has(itemName)){
      const existingRestaurants = this.restaurants.get(itemName);
      existingRestaurants?.push(restaurant)
      this.restaurants.set(itemName, existingRestaurants);
    }
    else this.restaurants.set(itemName, [restaurant]);
  }

  getRestaurantServedItems(restaurantName: string){

    if(!this.restaurantsList.has(restaurantName)){
      console.log('\n NO restaurant found!');
      return
    }

    const restaurant = this.restaurantsList.get(restaurantName);

    if(restaurant){
      console.log(`\nServed Items by ${restaurant.name}: `, [...restaurant.dispatchedOrders] );
    }

  }
}