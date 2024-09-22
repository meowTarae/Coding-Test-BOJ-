let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

const dp = [0, 1];

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

console.log(dp[input]);
