import { CashWithdrawalProcessor } from "./CashWithdrawalProcessor";

export class OneHundredWithdrawal extends CashWithdrawalProcessor{
  withdraw(amountRequired: number ){

    while(amountRequired >= 100 && this.availableNotes !== 0){
      amountRequired -= 100;
      console.log('1 note of 100/-')
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