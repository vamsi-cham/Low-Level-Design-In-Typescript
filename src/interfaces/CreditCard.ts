import log from "../logger";
import { ModeOfPayment } from "./ModeOfPayment";

export class CreditCard implements ModeOfPayment{
  pay(amount: number): void {
      log.info(`${amount} paid with credit card`)
  }
}