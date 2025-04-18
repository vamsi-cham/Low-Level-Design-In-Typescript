export class Order{

  public id: string;
  public pincode: string;

  constructor(id: string, pincode: string){
    this.id = id,
    this.pincode =pincode;
  }
}