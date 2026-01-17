import { InventoryService } from "../InventoryService";
import { NotificationService } from "../NotificationService";
import { PaymentService } from "../PaymentsService";
import { UserService } from "../UserService";

export class OrderFacade {
  private userService = new UserService();
  private inventoryService = new InventoryService();
  private paymentService = new PaymentService();
  private notificationService = new NotificationService();

  placeOrder(userId: string, itemId: string, amount: number): void {
    if (!this.userService.validateUser(userId)) return;
    if (!this.inventoryService.checkItemStock(itemId)) return;

    this.paymentService.chargeCard(userId, amount);
    this.notificationService.sendConfirmation(userId);

    console.log("Order placed successfully!");
  }
}
