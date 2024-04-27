let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let num = +input[0];

const dp = Array(num + 1).fill(Infinity);
[dp[1], dp[2], dp[3]] = [0, 1, 1];

const solution = (num) => {
  for (let i = 4; i <= num; i++) {
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    dp[i] = Math.min(dp[i], dp[i - 1] + 1);
  }
  return dp[num];
};

console.log(solution(num));
