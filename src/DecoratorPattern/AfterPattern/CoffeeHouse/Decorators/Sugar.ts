import { Coffee } from "../CoffeeInterface";

export class Sugar implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 5;
  }

  description(): string {
    return this.coffee.description() + ', with Sugar';
  }
}