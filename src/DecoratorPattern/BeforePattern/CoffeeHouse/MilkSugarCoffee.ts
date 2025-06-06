import { Coffee } from "./Coffee";

export class MilkSugarCoffee extends Coffee {
  cost(): number {
    return super.cost() + 15;
  }

  description(): string {
    return super.description() + ', with Milk and Sugar';
  }
}