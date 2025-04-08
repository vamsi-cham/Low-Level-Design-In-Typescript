import { ModeOfPayment } from "./interfaces/ModeOfPayment";

export class ShoppingCart{
  private totalAmount: number;
  private modeOfPayment: ModeOfPayment;

  constructor(defaultPaymentMethod: ModeOfPayment){
    this.totalAmount = 0;
    this.modeOfPayment = defaultPaymentMethod;
  }

  add(amount:number){
    this.totalAmount += amount;
  }

  makePayment(modeOfPayment?: ModeOfPayment){
    this.modeOfPayment = modeOfPayment ?? this.modeOfPayment;
    this.modeOfPayment.pay(this.totalAmount);
    this.totalAmount = 0;
  }

}