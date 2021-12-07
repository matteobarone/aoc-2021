import input from './input.mjs';

const result = [];

for (let i = 0; i <= Math.max(...input); i++) {
  const fuelCost = input.reduce((acc, el, index) => {
    const steps = Math.abs(el - i);
    // only for part 2; part 1 was (acc + steps)
    return acc + (steps * (steps + 1) / 2);
  }, 0);

  result.push(fuelCost);
}

console.log(Math.min(...result));