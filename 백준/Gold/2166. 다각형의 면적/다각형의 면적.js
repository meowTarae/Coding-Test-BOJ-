const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arrX = [];
const arrY = [];

for (const pos of input) {
  const [x, y] = pos.split(" ").map(Number);

  arrX.push(x);
  arrY.push(y);
}

let r1 = 0;
let r2 = 0;

for (let i = 0; i < N; i++) {
  r1 += arrX[i] * arrY[(i + 1) % N];
  r2 += arrY[i] * arrX[(i + 1) % N];
}

console.log((Math.abs(r1 - r2) / 2).toFixed(1));
