import lodash from 'lodash';
import input from './input.mjs';

const board = {};

const addToBoard = (positionsToFlag) => {
  positionsToFlag.forEach(pos => {
    board[pos] = board[pos] ? board[pos] + 1 : 1;
  });
}

for (let i = 0; i < input.length; i++) {
  const start = input[i][0];
  const end = input[i][1];
  const startSplitted = start.split(',').map(el => parseInt(el));
  const endSplitted = end.split(',').map(el => parseInt(el));

  const startXRange = startSplitted[0];
  const startYRange = startSplitted[1];
  const endXRange = startSplitted[0] > endSplitted[0] ? endSplitted[0] - 1 : endSplitted[0] + 1;
  const endYRange = startSplitted[1] > endSplitted[1] ? endSplitted[1] - 1 : endSplitted[1] + 1;

  const maxX = Math.max(startXRange, endXRange);
  const minX = Math.min(startXRange, endXRange);
  const maxY = Math.max(startYRange, endYRange);
  const mixY = Math.min(startYRange, endYRange);
  
  // only for the second part
  if ((maxX - minX) === (maxY - mixY)) {
    const positionsXToFlag = lodash.range(startXRange, endXRange);
    const positionsYToFlag = lodash.range(startYRange, endYRange);
    const positionsToFlag = positionsXToFlag.map((x, index) => `[${x},${positionsYToFlag[index]}]`);
    addToBoard(positionsToFlag);
  }

  if (startSplitted[0] === endSplitted[0]) {
    const positionsYToFlag = lodash.range(startYRange, endYRange);
    const positionsToFlag = positionsYToFlag.map(y => `[${startSplitted[0]},${y}]`);
    addToBoard(positionsToFlag);
  }

  if (startSplitted[1] === endSplitted[1]) {
    const positionsXToFlag = lodash.range(startXRange, endXRange);
    const positionsToFlag = positionsXToFlag.map(x => `[${x},${startSplitted[1]}]`);
    addToBoard(positionsToFlag);
  }
}

const atLeastTwoValue = Object.values(board).filter(v => v >= 2);
console.log(atLeastTwoValue.length);