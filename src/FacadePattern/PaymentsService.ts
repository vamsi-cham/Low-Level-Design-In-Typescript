export class PaymentService {
  chargeCard(userId: string, amount: number): void {
    console.log(`Charging ₹${amount} to user ${userId}`);
  }
}