import input from './input.mjs';
import { getLocations } from './utils.mjs';

const lowPoints = [];
const takenPositions = {}

// Find low points
for (let x = 0; x < input.length; x++) {
  for (let y = 0; y < input[x].length; y++) {
    const current = parseInt(input[x][y]);
    const locations = getLocations(input, x, y);

    if (Object.values(locations).filter(el => el !== undefined).every(n => current < parseInt(n))) {
      const lowPoint = {locations, current, position: {x, y}}
      lowPoints.push(lowPoint);
    }
  }
}

// Find basins
const basins = lowPoints.reduce((acc, lowPoint, i) => {
  const basin = getBasinSize(lowPoint.current, lowPoint.locations, lowPoint.position);
  return [...acc, basin];
}, []);

const largestThreeBasins = basins.sort((a, b) => a < b ? 1 : a > b ? -1 : 0).slice(0, 3);
const multiply = largestThreeBasins.reduce((acc, el) => acc * el, 1);

console.log(multiply);



function getBasinSize(n, locations, position) {
  let counter = 1;
  const t = formatTakenPositions(position);
  takenPositions[t] = true;

  const calculateNewLocation = (direction, newPosition) => {
    const newTaken = formatTakenPositions(newPosition);
    if (!takenPositions[newTaken]) {
      const newLocations = getLocations(input, newPosition.x, newPosition.y);
      counter = counter + getBasinSize(locations[direction], newLocations, newPosition);
    }
  }

  if (locations.right && locations.right !== 9 && locations.right > n) {
    const newPosition = {x: position.x, y: position.y + 1};
    calculateNewLocation('right', newPosition);
  }
  
  if (locations.left && locations.left !== 9 && locations.left > n) {
    const newPosition = {x: position.x, y: position.y - 1};
    calculateNewLocation('left', newPosition);
  }
  
  if (locations.bottom && locations.bottom !== 9 && locations.bottom > n) {
    const newPosition = {x: position.x + 1, y: position.y};
    calculateNewLocation('bottom', newPosition);
  }
  
  if (locations.top && locations.top !== 9 && locations.top > n) {
    const newPosition = {x: position.x - 1, y: position.y};
    calculateNewLocation('top', newPosition);
  }

  return counter;
}

function formatTakenPositions(position) {
  return Object.values(position).join('|');
}
