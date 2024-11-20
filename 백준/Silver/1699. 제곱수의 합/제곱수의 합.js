let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(filePath).toString().trim().split("\n");

const dp = Array(input + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= input; i++) {
  for (let j = 1; j ** 2 <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp[input]);
