const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const dp = Array(N + 1)
  .fill(0)
  .map((_) => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const [W, V] = input[i].split(" ").map(Number);

  for (let j = 1; j <= K; j++) {
    dp[i][j] =
      j >= W ? Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]) : dp[i - 1][j];
  }
}

console.log(dp[N].at(-1));
