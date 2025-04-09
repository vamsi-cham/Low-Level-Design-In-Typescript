export class GeneratePlacesForSnakeAndLadders{
  public startPoint: number;
  public endPoint: number;
  public generated: Set<number>

  constructor(startPoint: number, endPoint: number, generated: Set<number>){
    this.startPoint = startPoint,
    this.endPoint = endPoint,
    this.generated = generated

  }

  generatePlacesForSnakeAndLadders(requiredGenerations: number) {

    if (this.endPoint - this.startPoint + 1 < requiredGenerations) {
        throw new Error("Range too small to generate unique numbers");
    }

    const numbers = [];

    while (numbers.length < requiredGenerations) {
        const rand = Math.floor(Math.random() * (this.endPoint - this.startPoint + 1)) + this.startPoint;
        if (!this.generated.has(rand)) {
            this.generated.add(rand);
            numbers.push(rand);
        }
    }

    return numbers;
  }

}