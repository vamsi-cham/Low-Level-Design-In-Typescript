class PaymentProcessor {
  pay(method: string, amount: number) {
    if (method === 'card') {
      console.log(`Paid ₹${amount} with Card`);
    } else if (method === 'upi') {
      console.log(`Paid ₹${amount} with UPI`);
    }
  }
}

const processor = new PaymentProcessor();
processor.pay('card', 1000);