import log from "../logger";
import { ModeOfPayment } from "./ModeOfPayment";

export class UPI implements ModeOfPayment{
  pay(amount: number): void {
      log.info(`${amount} paid with upi`)
  }
}