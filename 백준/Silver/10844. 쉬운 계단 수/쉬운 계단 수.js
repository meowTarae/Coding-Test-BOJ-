const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +fs.readFileSync(filePath).toString().trim();

const MOD = 1000000000;
const dp = [null, Array(10).fill(1)];
dp[1][0] = 0;

for (let i = 2; i <= N; i++) {
  const arr = Array(10).fill(0);
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      arr[j] = dp[i - 1][1] % MOD;
    } else if (j === 9) {
      arr[j] = dp[i - 1][8] % MOD;
    } else {
      arr[j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
  }
  dp.push(arr);
}

console.log(dp[N].reduce((a, b) => a + b) % MOD);
