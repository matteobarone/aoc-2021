export function increasesAdjacents(grid, x, y) {
  increaseIfHasRequirements(grid, x - 1, y - 1); // top left
  increaseIfHasRequirements(grid, x - 1, y); // top
  increaseIfHasRequirements(grid, x - 1, y + 1); // top right

  increaseIfHasRequirements(grid, x, y - 1); // left
  increaseIfHasRequirements(grid, x, y + 1); // right

  increaseIfHasRequirements(grid, x + 1, y - 1); // bottom left
  increaseIfHasRequirements(grid, x + 1, y); // bottom
  increaseIfHasRequirements(grid, x + 1, y + 1); // bottom right
}

function increaseIfHasRequirements(grid, x, y) {
  if (grid[x]?.[y]) {
    grid[x][y] = grid[x][y] + 1;
  }
}

export function existsOneValueGreaterThanNine(grid) {
  return grid.find(row => row.find(el => el > 9));
}

export function areAllFlashing(grid) {
  return grid.every(row => row.every(el => el === 0));
}