import { ReedemStratergy } from "./ReedemStratergy";

export class BronzeReedem implements ReedemStratergy{
  reedemCoins(reedemPoints: number, totalPoints: number, amount: number): number{

    if(reedemPoints > 200 || reedemPoints > (0.05*amount)) {
      console.log('\nPurchase Failed. reedem points not eligible')
      return -1;
    }

    return totalPoints-reedemPoints+ (0.1*(amount-reedemPoints));

  }

}