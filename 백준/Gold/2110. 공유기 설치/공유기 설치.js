let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [items, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, C] = items.split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);

let start = 1;
let end = arr[N - 1] - arr[0];
let result = 0;

while (start <= end) {
  let mid = ~~((start + end) / 2);

  let count = 1;
  let prev = arr[0];
  for (let i = 1; i < N; i++) {
    if (prev + mid <= arr[i]) {
      count += 1;
      prev = arr[i];
    }
  }

  if (count >= C) {
    result = Math.max(result, mid);
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
