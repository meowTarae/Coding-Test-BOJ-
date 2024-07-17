let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = +input.shift();
const map = input[0].split(" ").map(Number);
const dp = Array(A).fill(1);

for (let i = 1; i < A; i++) {
  for (let j = 0; j < i; j++) {
    if (map[j] < map[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
