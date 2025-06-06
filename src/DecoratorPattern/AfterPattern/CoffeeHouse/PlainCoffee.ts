import { Coffee } from "./CoffeeInterface";

export class PlainCoffee implements Coffee {
  cost(): number {
    return 50;
  }

  description(): string {
    return 'Plain Coffee';
  }
}