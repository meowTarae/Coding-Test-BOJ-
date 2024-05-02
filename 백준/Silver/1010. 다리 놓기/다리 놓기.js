let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arrN = [];
const arrM = [];
for (let i = 0; i < T; i++) {
  const [N, M] = input[i].split(" ").map(Number);
  arrN.push(N);
  arrM.push(M);
}

const bigN = Math.max(...arrN);
const bigM = Math.max(...arrM);
const dp = Array(bigN + 1)
  .fill(0)
  .map((_) => Array(bigM + 1).fill(0));

for (let i = 1; i <= bigN; i++) {
  for (let j = 1; j <= bigM; j++) {
    if (i === 1) {
      dp[i][j] = j;
      continue;
    }
    dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
  }
}

for (let i = 0; i < T; i++) {
  console.log(dp[arrN[i]][arrM[i]]);
}
