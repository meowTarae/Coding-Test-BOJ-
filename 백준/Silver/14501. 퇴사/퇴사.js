let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const dp = Array(+N + 1).fill(0);

for (let i = N - 1; i >= 0; i--) {
  const [T, P] = input[i].split(" ").map(Number);

  const next = i + T;
  if (next > N) {
    dp[i] = dp[i + 1];
  } else {
    dp[i] = Math.max(dp[i + 1], P + (dp[next] || 0));
  }
}

console.log(dp[0]);
