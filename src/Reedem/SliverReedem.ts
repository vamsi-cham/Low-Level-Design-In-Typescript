import { ReedemStratergy } from "./ReedemStratergy";

export class SliverReedem implements ReedemStratergy{
  reedemCoins(reedemPoints: number, totalPoints: number, amount: number): number{

    if(reedemPoints > 500 || reedemPoints > (0.1*amount)) {
      console.log('\nPurchase Failed. reedem points not eligible')
      return totalPoints;
    }

    return totalPoints-reedemPoints+ (0.125*(amount-reedemPoints));

  }

}