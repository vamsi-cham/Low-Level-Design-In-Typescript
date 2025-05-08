import { Restaurant } from "../Restaurant/Restaurant";

export function calculateTotalPrice(restaurant: Restaurant, items: string[]): number{

  const allItems = restaurant.menu.itemsList;

  let totalPrice = 0;

  items.forEach((itemName)=>{
    const getItemPrice = allItems.get(itemName)?.price ?? 0;
    totalPrice += getItemPrice;
  })

  return totalPrice;

}