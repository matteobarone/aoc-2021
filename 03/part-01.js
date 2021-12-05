import input from './input.mjs';
import { getCount } from './util.mjs';

const length = input[0].length;

const results = [];

for (let i = 0; i < length; i++) {
  const count = getCount(input, i);

  if (count.zeros > count.ones) {
    results.push('0')
  } else {
    results.push('1')
  }
}

const r = results.join('');
const invertR = results.map(el => el === '0' ? '1' : '0').join('');
const multiply = parseInt(r, 2) * parseInt(invertR, 2);
console.log(multiply);