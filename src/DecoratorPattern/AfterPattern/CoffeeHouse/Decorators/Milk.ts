import { Coffee } from "../CoffeeInterface";

// Concrete Decorators (wrapping another Coffee object)
export class Milk implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 10;
  }

  description(): string {
    return this.coffee.description() + ', with Milk';
  }
}