import { EmailNotifier } from "../Notifier/EmailNotifier";
import { Notifier } from "../Notifier/NotifierInterface";
import { SMSNotifier } from "../Notifier/SMSNotifier";

export class NotificationFactory {
  static create(type: string): Notifier {
    switch (type) {
      case 'email': return new EmailNotifier();
      case 'sms': return new SMSNotifier();
      default: throw new Error("Invalid notification type");
    }
  }
}