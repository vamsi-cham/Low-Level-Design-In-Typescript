class Notifier {
  constructor(private type: string) {}

  send(message: string) {
    if (this.type === 'email') {
      console.log(`Sending Email: ${message}`);
    } else if (this.type === 'sms') {
      console.log(`Sending SMS: ${message}`);
    } else {
      console.log(`Unknown notification type`);
    }
  }
}

const notifier = new Notifier('sms');
notifier.send('Hello!');
