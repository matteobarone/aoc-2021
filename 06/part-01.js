import input from './input.mjs';

const DAYS = 255;
const childrenByNumber = {};

const result = input.reduce((acc, el) => {
  childrenByNumber[el] = childrenByNumber[el] ?? 1 + getChildrenFishes(DAYS, el);
  return acc + childrenByNumber[el];
}, 0);

console.log('result', result);

function getChildrenFishes(startDay, counter) {
  const nextBorn = startDay - counter;

  if (nextBorn < 0) {
    return 0;
  }

  const n = 1 + Math.floor(nextBorn / 7);

  let childrenOfChild = 0;
  for (let k = 0; k < n; k++) {
    childrenOfChild = childrenOfChild + getChildrenFishes((nextBorn - (k * 7)), 9);
  }

  return n + childrenOfChild;
}