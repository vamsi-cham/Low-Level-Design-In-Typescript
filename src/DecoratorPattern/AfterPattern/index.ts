import { Milk } from "./CoffeeHouse/Decorators/Milk";
import { Sugar } from "./CoffeeHouse/Decorators/Sugar";
import { Whip } from "./CoffeeHouse/Decorators/Whip";
import { PlainCoffee } from "./CoffeeHouse/PlainCoffee";

const order = new Whip(
  new Sugar(
    new Milk(
      new PlainCoffee()
    )
  )
);

console.log(order.description()); // Plain Coffee, with Milk, with Sugar, with Whipped Cream
console.log(order.cost());        // 80

// Each add-on (Milk, Sugar, Whip) is a decorator.
// They all implement the same interface Coffee and wrap another Coffee object.
// No need for subclassing all combinations like MilkSugarCoffee.
// You can compose any combination dynamically at runtime.