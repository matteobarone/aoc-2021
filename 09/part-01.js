import input from './input.mjs';
import { getLocations } from './utils.mjs';

let sum = 0;

// Find low points
for (let x = 0; x < input.length; x++) {
  for (let y = 0; y < input[x].length; y++) {
    const current = parseInt(input[x][y]);
    const locations = getLocations(input, x, y);

    if (Object.values(locations).filter(el => el !== undefined).every(n => current < parseInt(n))) {
      sum = sum + current + 1;
    }
  }
}

console.log(sum);