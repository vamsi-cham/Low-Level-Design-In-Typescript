import { CreditCard } from "./interfaces/CreditCard";
import { UPI } from "./interfaces/UPI";
import log from "./logger";
import { ShoppingCart } from "./shoppingCart";

// const person: string = 'Vamsi';

// log.info(person)

const defaultPaymentMethod = new CreditCard();

const cart = new ShoppingCart(defaultPaymentMethod);

cart.add(100);

cart.add(5);

cart.makePayment();

cart.add(111);

cart.add(12);

cart.makePayment(new UPI());