import { Agent } from "../Agent/Agent";
import { Order } from "../Order/Order";

export class DeliveryApp{

    private orders: Order[];
    private agents: Agent[];

    constructor(){
      this.orders = [];
      this.agents = [];
    }

    createOrder(id: string, pincode: string){

      this.orders.push(new Order(id, pincode))

    }

    createAgent(id: string, pincodes: string[]){

      this.agents.push(new Agent(id, pincodes))

    }

    getOrders(){
      return this.orders;
    }

    getAgents(){
      return this.agents;
    }
}