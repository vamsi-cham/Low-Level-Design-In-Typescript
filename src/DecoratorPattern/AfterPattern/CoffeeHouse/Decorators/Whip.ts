import { Coffee } from "../CoffeeInterface";

export class Whip implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 15;
  }

  description(): string {
    return this.coffee.description() + ', with Whipped Cream';
  }
}