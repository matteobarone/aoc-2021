export function getCount(input, position) {
  const counter = {
    zeros: 0,
    ones: 0
  }

  for (let j = 0; j < input.length; j++) {
    if (input[j][position] === '0') {
      counter.zeros = counter.zeros + 1;
    } else if (input[j][position] === '1') {
      counter.ones = counter.ones + 1;
    }
  }

  return counter;
}