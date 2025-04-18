import { ReedemStratergy } from "./ReedemStratergy";

export class GoldReedem implements ReedemStratergy{
  reedemCoins(reedemPoints: number, totalPoints: number, amount: number): number{

    if(reedemPoints > 1000 || reedemPoints > (0.15*amount)) {
      console.log('\nPurchase Failed. reedem points not eligible')
      return totalPoints;
    }

    return totalPoints-reedemPoints+ (0.15*(amount-reedemPoints));

  }

}