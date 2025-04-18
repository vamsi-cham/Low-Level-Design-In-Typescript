import { DeliveryApp } from "./Delivery/DeliveryApp";
import { DeliveryService } from "./Delivery/DeliveryService";

const app = new DeliveryApp();

app.createOrder('Order A', '560087')

app.createOrder('Order B', '560088')

app.createOrder('Order C', '560089')

app.createOrder('Order D', '560087')

app.createAgent('Agent A', ['560087'])

app.createAgent('Agent B', ['560088'])

app.createAgent('Agent C', ['560089'])

DeliveryService.processOrders(app.getOrders(), app.getAgents());

