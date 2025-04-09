import { generatePlacesForSnakeAndLadders } from "./generatePlacesForSnakeAndLadders";

function assignPlaces(places: number[], snakesAndLadders: Map<number, number>){

  let mid = Math.floor(places.length/2);

  let curr = mid;

  let run = 0;

  while(run < mid){
    snakesAndLadders.set(places[run], places[curr])
    curr++;
    run++;
  }

}
export function arrangeSnakeAndLadders(
  snakesCount: number, 
  laddersCount: number, 
  size: number
): Map<number, number>{

  const used = new Set<number>();

  const snakes = generatePlacesForSnakeAndLadders(snakesCount*2,1, size*size-2, used);
  const ladders = generatePlacesForSnakeAndLadders(laddersCount*2,1, size*size-2, used); 

  snakes.sort((a,b)=>b-a)
  ladders.sort((a,b)=>a-b);

  const snakesAndLadders = new Map<number, number>();

  assignPlaces(snakes, snakesAndLadders);
  assignPlaces(ladders, snakesAndLadders);
  
  return snakesAndLadders;

}