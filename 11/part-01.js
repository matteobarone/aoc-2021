import input from './input.mjs';
import { increasesAdjacents, existsOneValueGreaterThanNine } from './utils.mjs';

let grid = [...input];
let step = 1;
let flashes = 0;

while(step <= 100) {
  grid = grid.map(row => row.map(el => el + 1));

  while(existsOneValueGreaterThanNine(grid)) {
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        if (grid[x][y] === 0) {
          continue;
        }
  
        if (grid[x][y] > 9) {
          grid[x][y] = 0;
          increasesAdjacents(grid, x, y);
          flashes++;
        }
      }
    }
  }

  step++;
}

console.log('flashes: ', flashes);