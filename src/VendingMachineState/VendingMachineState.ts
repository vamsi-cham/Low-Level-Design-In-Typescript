import { VendingMachine } from "../VendingMachine/VendingMachine";

export interface VendingMachineState{

  vendingMachine: VendingMachine;

  clickInsertCoinButton():void;

  addCoin(amount: number): void;

  clickChooseProductButton(): void;

  enterCode(digit: number): void;

  clickDispenseButton(): void;

  dispenseItem(): void;

  cancelOperation(): void;
  
}