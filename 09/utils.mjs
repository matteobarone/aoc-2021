export function getLocations(input, x, y) {
  return {
    right: parseValue(input[x]?.[y + 1]),
    left: parseValue(input[x]?.[y - 1]),
    bottom: parseValue(input[x + 1]?.[y]),
    top: parseValue(input[x - 1]?.[y]),
  };
}

function parseValue(value) {
  return value && parseInt(value)
}