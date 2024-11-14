let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [[N], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const 오름차순dp = Array(N).fill(1);
const 내림차순dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && 오름차순dp[i] < 오름차순dp[j] + arr[i])
      오름차순dp[i] = Math.max(오름차순dp[i], 오름차순dp[j] + 1);
  }
}

const reverseArr = arr.reverse();
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (
      reverseArr[i] > reverseArr[j] &&
      내림차순dp[i] < 내림차순dp[j] + reverseArr[i]
    )
      내림차순dp[i] = Math.max(내림차순dp[i], 내림차순dp[j] + 1);
  }
}
내림차순dp.reverse();

const result = 오름차순dp.map((v, i) => v + 내림차순dp[i] - 1);
console.log(Math.max(...result));
