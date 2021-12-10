import input from './input.mjs';
import { OPEN, CLOSE } from './utils.mjs';

const POINTS = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137
}

const corrupted = [];

for (let i = 0; i < input.length; i++) {
  let clonedLine = [...input[i]];
  let chunks = 0;
  
  for (let j = 0; j < input[i].length; j++) {
    if (OPEN.includes(input[i][j])) {
      continue;
    }

    const closedIndex = CLOSE.findIndex(el => el === input[i][j]);
    const previousToCheck = clonedLine[j - 1 - (chunks * 2)];

    if (previousToCheck === OPEN[closedIndex]) {
      clonedLine = clonedLine.filter((el, index) => index !== (j - (chunks * 2)) && index !== (j - 1 - (chunks * 2)));
      chunks = chunks + 1;
      continue;
    }

    corrupted.push(POINTS[input[i][j]]);
    break;
  }
}

const sum = corrupted.reduce((acc, n) => acc + n, 0);

console.log(sum);