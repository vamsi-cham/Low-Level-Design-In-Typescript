export class ArrangeSnakeAndLadders{

  public snakes: number[];
  public ladders: number[];

  constructor(snakes: number[], ladders: number[]){

    this.snakes= snakes;
    this.ladders = ladders;

  }

  arrangeSnakeAndLadders(): Map<number, number>{

    this.snakes.sort((a,b)=>b-a)
    this.ladders.sort((a,b)=>a-b);

    const snakesAndLadders = new Map<number, number>();

    this.assignPlaces(this.snakes, snakesAndLadders);
    this.assignPlaces(this.ladders, snakesAndLadders);
    
    return snakesAndLadders;

  }

  assignPlaces(places: number[], snakesAndLadders: Map<number, number>){

    let mid = Math.floor(places.length/2);

    let curr = mid;

    let run = 0;

    while(run < mid){
      snakesAndLadders.set(places[run], places[curr])
      curr++;
      run++;
    }

  }
}