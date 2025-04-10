import { IdleState } from "./IdleState";
import { MachineState } from "./MachineState";
import { TakingCodeState } from "./TakingCodeState";

export class TakingCoinState extends MachineState{

  addCoin(amount: number){
    console.log('\nI received your coin - ', amount)
  }

  clickChooseProductButton(){

    console.log('\nChoose a item and enter the its code')
    this.vendingMachine.setMachineState(new TakingCodeState(this.vendingMachine))
  };

  cancelOperation(){
    console.log('\nCancelled. Take your coins if you inserted any')
    this.vendingMachine.setMachineState(new IdleState(this.vendingMachine))
  };
}