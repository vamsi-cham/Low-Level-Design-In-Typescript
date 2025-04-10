import { CashWithdrawalInterface } from "./CashWithdrawalInterface";

export abstract class CashWithdrawalProcessor implements CashWithdrawalInterface{

  public availableNotes: number;
  public nextProcessor: CashWithdrawalInterface|null = null;

  constructor(availableNotes: number){
    this.availableNotes = availableNotes;
  }

  setNextProcessor(nextProcessor: CashWithdrawalInterface | null){
    this.nextProcessor = nextProcessor;
  }

  withdraw(amountRequired: number){
    if(!this.nextProcessor){
      console.log('No sufficient cash in ATM\n')
      return
    }
    this.nextProcessor.withdraw(amountRequired);
  }

}

