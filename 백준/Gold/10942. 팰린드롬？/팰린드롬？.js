let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const numbers = input[1].split(" ").map(Number);
const M = +input[2];
const queries = [];

for (let i = 3; i < M + 3; i++) {
  queries.push(input[i].split(" ").map(Number));
}

const dp = Array(N)
  .fill(0)
  .map(() => Array(N).fill(0));

for (let length = 1; length <= N; length++) {
  for (let start = 0; start <= N - length; start++) {
    const end = start + length - 1;

    if (length === 1) {
      dp[start][end] = 1;
    } else if (length === 2) {
      dp[start][end] = numbers[start] === numbers[end] ? 1 : 0;
    } else {
      dp[start][end] =
        numbers[start] === numbers[end] && dp[start + 1][end - 1] === 1 ? 1 : 0;
    }
  }
}

const results = [];
for (const [l, r] of queries) {
  results.push(dp[l - 1][r - 1]);
}

console.log(results.join("\n"));
