import { OrderStatus } from "../Enum/OrderStatus";
import { calculateTotalPrice } from "../helper/calculateTotalPrice";
import { Restaurant } from "../Restaurant/Restaurant";

export class Order{
  public orderId: string;
  public items: string[];
  public restaurant: Restaurant;
  public totalPrice: number;
  public status: OrderStatus;

  constructor(orderId: string, restaurant: Restaurant, items: string[]){
    this.orderId = orderId;
    this.restaurant = restaurant;
    this.items= [...items];
    this.totalPrice = calculateTotalPrice(restaurant, items);
    this.status = OrderStatus.INPROCESS;
  }

  updateOrderStatus(status: OrderStatus){
    this.status = status;
  }
}