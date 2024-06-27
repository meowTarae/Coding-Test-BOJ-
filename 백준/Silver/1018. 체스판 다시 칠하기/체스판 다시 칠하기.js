let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const blackMap = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
const whiteMap = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const checkBlack = (i, j) => {
  let count = 0;

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (blackMap[y][x] !== input[i + y][j + x]) count++;
    }
  }

  return count;
};

const checkWhite = (i, j) => {
  let count = 0;

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (whiteMap[y][x] !== input[i + y][j + x]) count++;
    }
  }

  return count;
};

const [N, M] = input.shift().split(" ");
const result = [];

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    result.push(checkWhite(i, j));
    result.push(checkBlack(i, j));
  }
}

console.log(Math.min(...result));
