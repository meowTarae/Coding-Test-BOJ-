let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = [0, input[0], input[0] + input[1]];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + input[i - 1],
    dp[i - 3] + input[i - 2] + input[i - 1]
  );
}

console.log(dp[n]);
