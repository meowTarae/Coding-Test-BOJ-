let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = +fs.readFileSync(filePath).toString().trim().split();

const dp = Array(n + 1).fill(Infinity);
dp[2] = 1;
dp[4] = 2;
dp[5] = 1;

for (let i = 6; i <= n; i++) {
  dp[i] = Math.min(dp[i - 5], dp[i - 2]) + 1;
}

console.log(dp[n] === Infinity ? -1 : dp[n]);
