import { IdleState } from "./IdleState";
import { MachineState } from "./MachineState";

export class DispenseState extends MachineState{

    dispenseItem(){
      console.log('\nTake your item. Thank you !')
      this.vendingMachine.setMachineState(new IdleState(this.vendingMachine))
    };

}