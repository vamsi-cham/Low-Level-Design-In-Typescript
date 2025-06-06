import { Coffee } from "./Coffee";

export class MilkCoffee extends Coffee {
  cost(): number {
    return super.cost() + 10;
  }

  description(): string {
    return super.description() + ', with Milk';
  }
}