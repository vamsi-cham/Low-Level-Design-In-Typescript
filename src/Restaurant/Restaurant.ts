import { Order } from "../Order/Order";
import { Item } from "./Item";
import { Menu } from "./Menu";

export class Restaurant{

  public name: string;
  public menu: Menu;
  public capacity: number;
  public processingOrders: Set<string> = new Set();
  public dispatchedOrders: Set<string> = new Set();

  constructor(name: string, capacity: number, menu: Menu){
    this.name = name;
    this.menu = menu;
    this.capacity = capacity;
  }

  updateItem(itemName: string, price: number){

    this.menu.addItem(new Item(itemName, price));

  }
}