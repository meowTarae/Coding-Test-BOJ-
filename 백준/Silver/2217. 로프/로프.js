let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...ropes] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

ropes.sort((a, b) => b - a);
const result = [];

for (let i = 0; i < N; i++) {
  result.push(ropes[i] * (i + 1));
}

console.log(Math.max(...result));
