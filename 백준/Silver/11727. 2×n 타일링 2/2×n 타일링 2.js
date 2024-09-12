const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +fs.readFileSync(filePath).toString().trim();

const dp = [0, 1, 3];

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}

console.log(dp[N]);
