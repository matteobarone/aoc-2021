import input from './input.mjs';
import { OPEN, CLOSE } from './utils.mjs';

const POINTS = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4
}

const incompleted = [];

for (let i = 0; i < input.length; i++) {
  let clonedLine = [...input[i]];
  let chunks = 0;
  let isCorrupted = false;
  
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

    isCorrupted = true;
    break;
  }

  if (!isCorrupted) {
    incompleted.push(clonedLine);
  }
}

const listOfScores = incompleted.map(missingPart => {
  return missingPart.reverse().reduce((acc, char) => {
    const index = OPEN.findIndex(c => c === char);
    return (acc * 5) + POINTS[CLOSE[index]];
  }, 0);
}).sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

const winningIndex = Math.round((listOfScores.length - 1) / 2);
const winning = listOfScores[winningIndex];

console.log(winning);
