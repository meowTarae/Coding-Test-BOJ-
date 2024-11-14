let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [[N], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const dp = Array(N).fill(1);

const reverseArr = arr.reverse();
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (reverseArr[i] > reverseArr[j] && dp[i] < dp[j] + reverseArr[i])
      dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(Math.max(...dp));
