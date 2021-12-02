import input from './input.mjs';
import { formatInput } from './utils.mjs';

const position = {
  horizontal: 0,
  depth: 0,
}

const formattedInput = formatInput(input);

formattedInput.forEach(el => {
  if (el.command === 'forward') {
    position.horizontal = position.horizontal + el.value;
  } else if (el.command === 'down') {
    position.depth = position.depth + el.value;
  } else if (el.command === 'up') {
    position.depth = position.depth - el.value;
  }
});

const result = position.horizontal * position.depth;

console.log(result);