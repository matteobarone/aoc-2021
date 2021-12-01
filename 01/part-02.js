import input from './input.mjs';
import { countIncreases } from './util.mjs';

const newInput = input.reduce((acc, _, i) => {
  if (input[i + 2]) {
    const sum = input[i] + input[i + 1] + input[i + 2];
    return [...acc, sum];
  }

  return acc;
}, []);

console.log(countIncreases(newInput));
