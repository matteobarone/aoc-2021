export function formatInput(input) {
  return input.map(element => {
    const splitted = element.split(' ');
    return { command: splitted[0], value: parseInt(splitted[1]) }
  });
}