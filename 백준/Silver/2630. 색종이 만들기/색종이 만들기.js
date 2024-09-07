const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const map = input.map((v) => v.split(" ").map(Number));
let white = 0;
let blue = 0;

const checkColor = (y, x, length) => {
  const color = map[y][x];

  for (let i = y; i < y + length; i++) {
    for (let j = x; j < x + length; j++) {
      if (map[i][j] !== color) return false;
    }
  }

  return true;
};

const func = (y, x, length) => {
  if (checkColor(y, x, length)) {
    map[y][x] === 1 ? blue++ : white++;
    return;
  }

  const half = length / 2;
  // 1사분면
  func(y, x, half);
  // 2사분면
  func(y, x + half, half);
  // 3사분면
  func(y + half, x, half);
  // 4사분면
  func(y + half, x + half, half);
};

func(0, 0, +N);
console.log(white);
console.log(blue);
