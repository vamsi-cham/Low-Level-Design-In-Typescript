import { VendingMachine } from "../VendingMachine/VendingMachine";
import { VendingMachineState } from "./VendingMachineState";

export abstract class MachineState implements VendingMachineState{
  public vendingMachine: VendingMachine;
  
    constructor(vendingMachine: VendingMachine){
      this.vendingMachine = vendingMachine;
    }
  
    clickInsertCoinButton(){
      console.log('\nNot valid now')
    }
  
    addCoin(amount: number){
      console.log('\nNot valid now')
    }
  
    clickChooseProductButton(){
      console.log('\nNot valid now')
    };
  
    enterCode(digit: number){
      console.log('\nNot valid now')
    };
  
    clickDispenseButton(){
      console.log('\nNot valid now')
    };
  
    dispenseItem(){
      console.log('\nNot valid now')
    };
  
    cancelOperation(){
      console.log('\nNot valid now')
    };
}