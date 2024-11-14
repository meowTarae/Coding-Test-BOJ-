let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [[N], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const dp = [arr[0]];

for (let i = 1; i < N; i++) {
  dp[i] = arr[i];

  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[j] + arr[i] > dp[i]) {
      dp[i] = dp[j] + arr[i];
    }
  }
}

console.log(Math.max(...dp));
