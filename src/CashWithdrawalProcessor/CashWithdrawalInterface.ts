export interface CashWithdrawalInterface{
  availableNotes: number;
  nextProcessor: CashWithdrawalInterface | null;

  withdraw(amountRequired: number): void;

  setNextProcessor(nextProcessor: CashWithdrawalInterface | null): void;
}