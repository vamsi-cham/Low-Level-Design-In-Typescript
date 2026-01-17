import { InventoryService } from "../InventoryService";
import { NotificationService } from "../NotificationService";
import { PaymentService } from "../PaymentsService";
import { UserService } from "../UserService";

const userService = new UserService();
const inventoryService = new InventoryService();
const paymentService = new PaymentService();
const notificationService = new NotificationService();

const userId = 'user123';
const itemId = 'item456';
const amount = 999;

const isValidUser = userService.validateUser(userId);
if (!isValidUser) {
  console.log("Invalid user.");
} else {
  const isInStock = inventoryService.checkItemStock(itemId);
  if (!isInStock) {
    console.log("Item out of stock.");
  } else {
    paymentService.chargeCard(userId, amount);
    notificationService.sendConfirmation(userId);
    console.log("Order placed successfully!");
  }
}