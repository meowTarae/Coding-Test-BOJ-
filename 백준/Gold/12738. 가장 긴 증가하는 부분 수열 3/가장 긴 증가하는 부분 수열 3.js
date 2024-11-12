let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [[N], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const BS = (left, right, target, idx) => {
  let mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (target > dp[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
};

let i = 1;
let j = 0;
const dp = [arr[0]];

while (i < N) {
  if (arr[i] > dp[j]) {
    dp[++j] = arr[i];
  } else {
    const idx = BS(0, j, arr[i], i);
    dp[idx] = arr[i];
  }

  i++;
}

console.log(dp.length);
