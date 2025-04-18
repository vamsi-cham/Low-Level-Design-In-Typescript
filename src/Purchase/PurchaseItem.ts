import { ReedemFactory } from "../Reedem/ReedemFactory";
import { User } from "../User/User";

export class PurchaseService {
  static processPurchase(user: User, totalAmount: number, reedemPoints: number): void {
    if (reedemPoints > user.getPoints()) {
      console.log('\nPurchase Failed. Not enough points to redeem');
      return;
    }

    const reedem = new ReedemFactory();
    const reedemLevel = reedem.createReedemLevel(user.getLevel());

    const updatedPoints = reedemLevel.reedemCoins(reedemPoints, user.getPoints(), totalAmount);

    if(updatedPoints !== -1){

      user.updatePoints(updatedPoints);

      console.log(
        `\nPurchase successful. Total payable amount: ${totalAmount}.
        Current points: ${user.getPoints()}. Current level: ${user.getLevel()}`
      );

    }
  }
}
