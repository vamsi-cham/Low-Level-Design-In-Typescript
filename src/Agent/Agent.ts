export class Agent{
  public id: string;
  public pincodes: string[] = [];
  //public freeTime?: Date;

  constructor(id: string, pincode: string[]){
    this.id = id;
    this.pincodes.push(...pincode);
  }

  addPincode(pincode: string){
    this.pincodes.push(pincode);
  }
}