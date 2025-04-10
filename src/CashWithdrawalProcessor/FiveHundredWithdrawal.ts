import { CashWithdrawalProcessor } from "./CashWithdrawalProcessor";

export class FiveHundredWithdrawal extends CashWithdrawalProcessor{

withdraw(amountRequired: number){

  while(amountRequired >= 500 && this.availableNotes !== 0){
    amountRequired -= 500;
    console.log('1 note of 500/-')
    this.availableNotes--;
  }

    if(amountRequired === 0){
      console.log('Transaction Complete !\n')
      return;
    }
    else{
      super.withdraw(amountRequired);
    }
  }

}
