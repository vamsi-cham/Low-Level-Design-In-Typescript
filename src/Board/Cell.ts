export class Cell{
  position: number;
  goTo: number | undefined;

  constructor(poistion: number, goTo?: number | undefined){
    this.position = poistion
    this.goTo = goTo
  }
}