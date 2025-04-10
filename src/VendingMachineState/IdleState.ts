import { MachineState } from "./MachineState";
import { TakingCoinState } from "./TakingCoinState";

export class IdleState extends MachineState{

  clickInsertCoinButton(){
    console.log('\nWelcome! you can INSERT your coin now')
    this.vendingMachine.setMachineState(new TakingCoinState(this.vendingMachine))
  }

}