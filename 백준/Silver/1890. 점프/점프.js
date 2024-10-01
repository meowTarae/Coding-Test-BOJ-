let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const map = rest.map((v) => v.split(" ").map(Number));
const dp = Array(+N)
  .fill(0)
  .map((_) => Array(+N).fill(BigInt(0)));
dp[0][0] = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (dp[i][j] === 0n || (i === N - 1 && j === N - 1)) continue;

    const jump = map[i][j];

    if (i + jump < N) dp[i + jump][j] += BigInt(dp[i][j]);
    if (j + jump < N) dp[i][j + jump] += BigInt(dp[i][j]);
  }
}

console.log(dp[N - 1][N - 1].toString());
