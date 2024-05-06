let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const dp = Array(+N + 1)
  .fill(0)
  .map((_) => Array(3).fill(0));

for (let i = 1; i <= N; i++) {
  const [R, G, B] = input[i - 1].split(" ").map(Number);

  dp[i][0] = R + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = G + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = B + Math.min(dp[i - 1][1], dp[i - 1][0]);
}

console.log(Math.min(...dp[N]));
