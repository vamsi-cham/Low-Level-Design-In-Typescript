import { OrderStatus } from "../Enum/OrderStatus";
import { PickRestaurantStrategy } from "../PickRestaurant/PickRestaurantStrategy";
import { RestaurantManager } from "../Restaurant/RestaurantManager";
import { Order } from "./Order";

export class OrderManager{

  public ordersList: Map<string, Order>;
  public restaurantManager: RestaurantManager;
  public pickRestaurantStrategy: PickRestaurantStrategy;

  constructor(restaurantManager: RestaurantManager, pickRestaurantStrategy: PickRestaurantStrategy){
    this.ordersList = new Map();
    this.restaurantManager = restaurantManager;
    this.pickRestaurantStrategy = pickRestaurantStrategy;
  }

  placeOrder(orderName: string, ...items: string[]){

    //for some reason below commented method is not working. need to debug
    //below method checks if all items are available in a restaurant

    //found the reason - item name is linked to single restaurant instead of multiple restaurants

    const areAllItemsPresent =  items.every(async (item)=>{

      //console.log(item, this.restaurantManager.restaurants.has(item))
        this.restaurantManager.restaurants.has(item)
      });

      //console.log(areAllItemsPresent);
    if(!areAllItemsPresent || items.length ===0){
      console.log('\nItem(s) not found, ORDER REJECTED');
      return;
    }

    //current strategy is to pick the first restaurant where the first item is present
      const restaurant = this.pickRestaurantStrategy.pickRestaurant(items);
      if(restaurant){
        const order = new Order(orderName, restaurant, items);
        this.ordersList.set(orderName, order);

        restaurant.processingOrders.add(order.orderId);

        console.log('\n ORDER PLACED SUCCESSFULLY')
        console.log(`Order Total: ${order.totalPrice} and Restaurant name: ${restaurant.name}`)

      }

  }

  dispatchOrder(orderName: string){
    const order = this.ordersList.get(orderName);

    order?.restaurant.processingOrders.delete(order.orderId);
    order?.restaurant.dispatchedOrders.add(order.orderId);

    order?.updateOrderStatus(OrderStatus.DISPATCHED);
  }

  getAllOrders(){
    console.log('\n All orders: ');
    [...this.ordersList].forEach((order)=>{
      const orderObj = order[1];
      console.log({
        'orderId': orderObj.orderId,
        'restaurant': orderObj.restaurant.name,
        'items': JSON.stringify(orderObj.items),
        'price': orderObj.totalPrice,
        'status': orderObj.status
      })
    })
  }

  getDispatchedOrders(){
    console.log('\n Dispacthed orders: ');
    [...this.ordersList].forEach((order)=>{
      const orderObj = order[1];
      if(orderObj.status === OrderStatus.DISPATCHED){
        console.log({
          'orderId': orderObj.orderId,
          'restaurant': orderObj.restaurant.name,
          'items': JSON.stringify(orderObj.items),
          'price': orderObj.totalPrice,
          'status': orderObj.status
        })

      }
    })
  }
}