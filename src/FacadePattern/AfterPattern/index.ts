import { OrderFacade } from "./OrderFacade";

const orderSystem = new OrderFacade();
orderSystem.placeOrder('user123', 'item456', 999);