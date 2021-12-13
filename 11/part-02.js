import input from './input.mjs';
import { increasesAdjacents, existsOneValueGreaterThanNine, areAllFlashing } from './utils.mjs';

let grid = [...input];
let step = 1;

while(!areAllFlashing(grid)) {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      grid[x][y] = grid[x][y] + 1;
    }
  }

  while(existsOneValueGreaterThanNine(grid)) {
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        if (grid[x][y] === 0) {
          continue;
        }
  
        if (grid[x][y] > 9) {
          grid[x][y] = 0;
          increasesAdjacents(grid, x, y);
        }
      }
    }
  }

  step++;
}

console.log('areAllFlashing: ', step - 1);