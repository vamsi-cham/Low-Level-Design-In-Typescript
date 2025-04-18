import { Agent } from "../Agent/Agent";
import { Order } from "../Order/Order";

export class DeliveryService{
  static processOrders(orders: Order[], agents: Agent[]){

    const agentFinder : Map<string, Agent[]>=  new Map();

    agents.forEach((agent)=>{

      const pincodes = agent.pincodes;

      pincodes.forEach((pincode)=>{

        if(agentFinder.has(pincode)){

          const existingAgents = agentFinder.get(pincode)
  
          existingAgents?.push(agent)
  
          if(existingAgents) agentFinder.set(pincode, existingAgents);
  
        }
        else agentFinder.set(pincode, [agent]);

      })
    })

    orders.forEach((order)=>{

        if(agentFinder.has(order.pincode)){
          const agents = agentFinder.get(order.pincode);

          const agent = agents?.shift();

          console.log(`${agent?.id} has picked up ${order?.id} `)

          console.log(`${agent?.id} has delivered ${order?.id} to ${order?.pincode} `)

          if(agents && agent) agents.push(agent)
        }

    })

  }
}