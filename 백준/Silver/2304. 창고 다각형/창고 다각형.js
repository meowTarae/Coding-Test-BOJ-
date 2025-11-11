let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const sticks = input
  .map((v) => v.split(" ").map(Number))
  .sort((a, b) => +a[0] - +b[0]);

let result = 0;
const maxHeight = [...sticks].sort((a, b) => b[1] - a[1])[0][1];
let maxIndex = -1;
sticks.forEach((v, i) => v[1] === maxHeight && (maxIndex = i));

let currentMaxHeight = 0;
let previousX = sticks[0][0];

for (let i = 0; i <= maxIndex; i++) {
  const [curX, curY] = sticks[i];

  result += currentMaxHeight * (curX - previousX);

  if (curY > currentMaxHeight) {
    currentMaxHeight = curY;
  }

  previousX = curX;
}

currentMaxHeight = 0;
previousX = sticks[N - 1][0];

for (let i = N - 1; i >= maxIndex; i--) {
  const [curX, curY] = sticks[i];

  result += currentMaxHeight * (previousX - curX);

  if (curY > currentMaxHeight) {
    currentMaxHeight = curY;
  }

  previousX = curX;
}

console.log(result + sticks[maxIndex][1]);
