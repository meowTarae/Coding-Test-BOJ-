const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [K, ...positions] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let maxArea;
let minArea;

// ! 최대 너비
const posY = [];
const posX = [];

for (const position of positions) {
  const [dir, value] = position.split(" ").map(Number);

  dir < 3 ? posX.push(value) : posY.push(value);
}

maxArea = Math.max(...posY) * Math.max(...posX);

// ! 최소 너비
const arr = positions
  .concat(...positions)
  .map((item) => item.split(" ")[0])
  .join("");

const regexp = [/3131/, /2323/, /1414/, /4242/];

for (const reg of regexp) {
  const match = arr.match(reg);

  if (!match) continue;

  const index = match.index;

  const minY = +positions[(index + 1) % 6].split(" ")[1];
  const minX = +positions[(index + 2) % 6].split(" ")[1];

  minArea = minY * minX;

  break;
}

console.log((maxArea - minArea) * K);