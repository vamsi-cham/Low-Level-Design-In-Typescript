export function generatePlacesForSnakeAndLadders(
  requiredGenerations: number,
  startPoint: number, 
  endPoint: number, 
  generated: Set<number>
) {

  if (endPoint - startPoint + 1 < requiredGenerations) {
      throw new Error("Range too small to generate unique numbers");
  }

  const numbers = [];

  while (numbers.length < requiredGenerations) {
      const rand = Math.floor(Math.random() * (endPoint - startPoint + 1)) + startPoint;
      if (!generated.has(rand)) {
          generated.add(rand);
          numbers.push(rand);
      }
  }

  return numbers;
}