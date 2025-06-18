let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const LENGTH = 2000001;
const OFFSET = 1000000;
const arr = Array(LENGTH).fill(false);
const result = [];

for (let i = 0; i < N; i++) {
  arr[input[i] + OFFSET] = true;
}

for (let i = 0; i < LENGTH; i++) {
  if (arr[i]) result.push(i - OFFSET);
}

console.log(result.join("\n"));
