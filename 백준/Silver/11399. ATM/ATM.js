const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let count = [arr[0]];

for (let i = 1; i < +n; i++) {
  count.push(count[i - 1] + arr[i]);
}

console.log(count.reduce((acc, cur) => acc + cur, 0));
