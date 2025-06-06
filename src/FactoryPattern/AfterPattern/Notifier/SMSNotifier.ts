import { Notifier } from "./NotifierInterface";

export class SMSNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}