import {matrices, order} from './input.mjs';

const numbersReleased = [];
let current = 0;
let isWinning = false;
let currentMatrice = null;
let clonedMatrices = [...matrices];

while (clonedMatrices.length > 0) {
  numbersReleased.push(order[current]);

  for (let i = 0; i < clonedMatrices.length; i++) {

    for (let k = 0; k < clonedMatrices[i].length; k++) {
      currentMatrice = clonedMatrices[i];
      const row = currentMatrice[k];
      const col = currentMatrice.map(r => r[k]);

      const isRowWinning = row.every(el => numbersReleased.includes(el));
      const isColWinning = col.every(el => numbersReleased.includes(el));

      if (isRowWinning || isColWinning) {
        isWinning = true;
        break;
      }
    }

    if (isWinning) {
      clonedMatrices = clonedMatrices.filter((m, index) => index !== i);
      isWinning = false;
    }

  }

  current++;
}


const lastNumber = numbersReleased[numbersReleased.length - 1]
const unmarkedNumbers = currentMatrice.flat().filter(n => !numbersReleased.includes(n));
const sum = unmarkedNumbers.reduce((acc, n) => acc + parseInt(n), 0);

console.log(sum * lastNumber);