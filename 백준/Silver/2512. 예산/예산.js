let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, input, M] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let low = 1;
let high = arr[N - 1];
let result = 0;

while (low <= high) {
  const mid = ~~((low + high) / 2);
  let sum = 0;
  for (const num of arr) {
    num > mid ? (sum += mid) : (sum += num);
  }

  if (sum <= M) {
    low = mid + 1;
    result = Math.max(result, mid);
  } else {
    high = mid - 1;
  }
}

console.log(result);
