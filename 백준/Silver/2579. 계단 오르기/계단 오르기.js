let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = Array(N + 1).fill(0);

dp[1] = input[0];
dp[2] = input[0] + input[1];
dp[3] = Math.max(input[0] + input[2], input[1] + input[2]);

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(
    input[i - 1] + input[i - 2] + dp[i - 3],
    input[i - 1] + dp[i - 2]
  );
}

console.log(dp[N]);
