let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const memo = input[0].split("");
const MAX_WIDTH = 100;
const map = Array(MAX_WIDTH)
  .fill(0)
  .map((_) => Array(MAX_WIDTH).fill("#"));
// 북, 동, 남, 서
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let currentDir = 2;
const current = [MAX_WIDTH / 2, MAX_WIDTH / 2];
map[current[0]][current[1]] = ".";

for (const word of memo) {
  switch (word) {
    case "R":
      currentDir += 1;
      if (currentDir === 4) currentDir = 0;
      break;
    case "L":
      currentDir -= 1;
      if (currentDir === -1) currentDir = 3;
      break;
    case "F":
      const [dy, dx] = dir[currentDir];
      current[0] = current[0] + dy;
      current[1] = current[1] + dx;

      map[current[0]][current[1]] = ".";

      break;
  }
}

let minY = Infinity,
  minX = Infinity,
  maxY = 0,
  maxX = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (map[i][j] !== ".") continue;

    if (minY > i) minY = i;
    if (minX > j) minX = j;
    if (maxY < i) maxY = i;
    if (maxX < j) maxX = j;
  }
}

for (let i = minY; i <= maxY; i++) {
  let str = "";

  for (let j = minX; j <= maxX; j++) {
    str += map[i][j];
  }

  console.log(str);
}
