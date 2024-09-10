const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.split(" ").map(Number);
const dp = [arr[0]];

for (let i = 1; i < n; i++) {
  arr[i] <= dp[i - 1] + arr[i]
    ? (dp[i] = dp[i - 1] + arr[i])
    : (dp[i] = arr[i]);
}

console.log(Math.max(...dp));
