import { IdleState } from "../VendingMachineState/IdleState";
import { VendingMachineState } from "../VendingMachineState/VendingMachineState";

export class VendingMachine{

  public store: Map<number,number>;
  public machineState: VendingMachineState;

  constructor(){
    this.store = new Map();
    this.machineState = new IdleState(this);
  }

  setMachineState(state: VendingMachineState){
    this.machineState = state;
  }
}