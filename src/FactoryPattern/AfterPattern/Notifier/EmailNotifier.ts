import { Notifier } from "./NotifierInterface";

export class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}