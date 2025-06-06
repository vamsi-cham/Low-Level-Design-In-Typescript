import { Coffee } from "./CoffeeHouse/Coffee";
import { MilkCoffee } from "./CoffeeHouse/MilkCoffee";
import { MilkSugarCoffee } from "./CoffeeHouse/MilkSugarCoffee";

const order1 = new Coffee();
console.log(order1.description()); // Plain Coffee
console.log(order1.cost()); // 50

const order2 = new MilkCoffee();
console.log(order2.description()); // Plain Coffee, with Milk
console.log(order2.cost()); // 60

const order3 = new MilkSugarCoffee();
console.log(order3.description()); // Plain Coffee, with Milk and Sugar
console.log(order3.cost()); // 65

// Disadvantages:
// Explosion of subclasses (MilkSugarWhipCoffee, SugarWhipCoffee, etc.)
// Hard to maintain, test, or extend.