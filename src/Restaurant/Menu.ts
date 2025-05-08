import { Item } from "./Item";

export class Menu{

  public itemsList: Map<string, Item> = new Map();

  constructor(items: Item[]){
      items.forEach((item)=>{
        this.itemsList.set(item.name, item);
      })
  }

  addItem(item: Item){
    this.itemsList.set(item.name, item);
  }

  removeItem(itemName: string){
    this.itemsList.delete(itemName)
  }

  getItems(){
    return [...this.itemsList];
  }

}