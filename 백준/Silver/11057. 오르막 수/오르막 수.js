let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

const dp = Array(input)
  .fill(0)
  .map((_) => Array(10).fill(1));

for (let i = 1; i < input; i++) {
  for (let j = 1; j < 10; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
  }
}

console.log(dp[input - 1].reduce((a, b) => a + b) % 10007);
