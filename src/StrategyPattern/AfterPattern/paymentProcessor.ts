interface PaymentStrategy {
  pay(amount: number): void;
}

class CardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Card`);
  }
}

class UpiPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using UPI`);
  }
}

class NewPaymentProcessor {
  constructor(private strategy: PaymentStrategy) {}

  process(amount: number) {
    this.strategy.pay(amount);
  }
}

// Usage
const upiProcessor = new NewPaymentProcessor(new UpiPayment());
upiProcessor.process(750);

const cardProcessor = new NewPaymentProcessor(new CardPayment());
cardProcessor.process(1200);
