import { VendingMachine } from "./VendingMachine/VendingMachine";

const vendingMachine = new VendingMachine();

// vendingMachine.machineState.addCoin(5);
vendingMachine.machineState.clickInsertCoinButton();
// vendingMachine.machineState.clickInsertCoinButton();
vendingMachine.machineState.addCoin(5);
vendingMachine.machineState.clickChooseProductButton();
//vendingMachine.machineState.clickInsertCoinButton();
// vendingMachine.machineState.cancelOperation();
vendingMachine.machineState.enterCode(2);
//vendingMachine.machineState.cancelOperation();
vendingMachine.machineState.clickDispenseButton();
vendingMachine.machineState.dispenseItem();
vendingMachine.machineState.clickInsertCoinButton();