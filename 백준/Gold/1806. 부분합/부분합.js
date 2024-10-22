let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [[N, S], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let sum = 0;
let minLength = Infinity;
let left = 0;
let right = 0;

while (right < N) {
  sum += arr[right];

  while (sum >= S) {
    sum -= arr[left];
    minLength = Math.min(minLength, right - left + 1);
    left += 1;
  }

  right += 1;
}

console.log(minLength === Infinity ? 0 : minLength);
