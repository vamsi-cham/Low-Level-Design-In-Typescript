import { CashWithdrawalProcessor } from "./CashWithdrawalProcessor";

export class TwoThousandWithdrawal extends CashWithdrawalProcessor{

  withdraw(amountRequired: number){

    while(amountRequired >= 2000 && this.availableNotes !== 0){
      amountRequired -= 2000;
      console.log('1 note of 2000/-')
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