let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [input] = fs.readFileSync(filePath).toString().trim().split(" ");

const N = +input;

const dp = [0, 1, 2];
for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[N]);
