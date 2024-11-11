let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number);

const dp = [A[0]];

const BS = (left, right, target) => {
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

while (i < N) {
  if (A[i] > dp[j]) {
    dp[++j] = A[i];
  } else {
    const idx = BS(0, j, A[i]);
    dp[idx] = A[i];
  }

  i++;
}

console.log(dp.length);
