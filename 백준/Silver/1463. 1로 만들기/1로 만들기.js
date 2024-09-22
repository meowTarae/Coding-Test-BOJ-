let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

const dp = [0, 0, 1, 1];

for (let i = 4; i <= input; i++) {
  const n1 = i % 3 === 0 ? dp[i / 3] + 1 : Infinity;
  const n2 = i % 2 === 0 ? dp[i / 2] + 1 : Infinity;
  const n3 = dp[i - 1] + 1;

  dp[i] = Math.min(n1, n2, n3);
}

console.log(dp[input]);
