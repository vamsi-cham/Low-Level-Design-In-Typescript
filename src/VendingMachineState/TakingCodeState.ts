import { DispenseState } from "./DispenseState";
import { IdleState } from "./IdleState";
import { MachineState } from "./MachineState";

export class TakingCodeState extends MachineState{

    enterCode(digit: number){

      console.log('\ndigit-', digit)
      
    };
  
    clickDispenseButton(){

      console.log('\nProduct selected. Processing to dispense item....');
      this.vendingMachine.setMachineState(new DispenseState(this.vendingMachine))
      
    };

    cancelOperation(){
        console.log('\nCancelled. Take your coins if you inserted any')
        this.vendingMachine.setMachineState(new IdleState(this.vendingMachine))
    };

}