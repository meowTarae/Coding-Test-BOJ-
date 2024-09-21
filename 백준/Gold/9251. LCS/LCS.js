const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = fs.readFileSync(filePath).toString().trim().split("\n");

const lenA = A.length;
const lenB = B.length;
const dp = Array(lenA + 1)
  .fill(0)
  .map(() => Array(lenB + 1).fill(0));

for (let i = 1; i <= lenA; i++) {
  for (let j = 1; j <= lenB; j++) {
    dp[i][j] =
      A[i - 1] === B[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

console.log(dp[lenA][lenB]);