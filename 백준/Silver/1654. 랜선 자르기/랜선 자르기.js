let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [number, ...lengths] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = number.split(" ").map(Number);
const input = lengths.map(Number);

const max = Math.max(...input);

let result = 0;
let low = 0;
let high = max;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  const sum = input.reduce((acc, length) => {
    return Math.floor(length / mid) + acc;
  }, 0);

  if (sum >= M) {
    result = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);
