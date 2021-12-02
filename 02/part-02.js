import input from './input.mjs';
import { formatInput } from './utils.mjs';

const position = {
  horizontal: 0,
  depth: 0,
  aim: 0,
}

const formattedInput = formatInput(input);

formattedInput.forEach(el => {
  if (el.command === 'forward') {
    position.horizontal = position.horizontal + el.value;
    position.depth = position.depth + (position.aim * el.value);
  } else if (el.command === 'down') {
    position.aim = position.aim + el.value;
  } else if (el.command === 'up') {
    position.aim = position.aim - el.value;
  }
});

const result = position.horizontal * position.depth;

console.log(result);