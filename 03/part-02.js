import input from './input.mjs';
import { getCount } from './util.mjs';

const length = input[0].length;
let clonedInputOxigenRating = [...input];
let clonedInputCO2Scrubber = [...input];

for (let i = 0; i < length; i++) {

  const newCount = getCount(clonedInputOxigenRating, i);

  if (newCount.zeros > newCount.ones) {
    clonedInputOxigenRating = clonedInputOxigenRating.filter(el => el[i] === '0');
  } else {
    clonedInputOxigenRating = clonedInputOxigenRating.filter(el => el[i] === '1');
  }

  if (clonedInputOxigenRating.length === 1) {
    break;
  }
}

for (let i = 0; i < length; i++) {

  const newCount = getCount(clonedInputCO2Scrubber, i);

  if (newCount.zeros > newCount.ones) {
    clonedInputCO2Scrubber = clonedInputCO2Scrubber.filter(el => el[i] === '1');
  } else {
    clonedInputCO2Scrubber = clonedInputCO2Scrubber.filter(el => el[i] === '0');
  }

  if (clonedInputCO2Scrubber.length === 1) {
    break;
  }
}

const lifeSupport = parseInt(clonedInputOxigenRating[0], 2) * parseInt(clonedInputCO2Scrubber[0], 2);

console.log(lifeSupport);