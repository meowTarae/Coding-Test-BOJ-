let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = [0, 1, 2, 4];

const solution = (num) => {
  if (!dp[num - 1]) solution(num - 1);
  if (!dp[num - 2]) solution(num - 2);
  if (!dp[num - 3]) solution(num - 3);

  dp[num] = dp[num - 1] + dp[num - 2] + dp[num - 3];
};

for (const iterator of input) {
  if (iterator === 1) console.log(dp[1]);
  else if (iterator === 2) console.log(dp[2]);
  else if (iterator === 3) console.log(dp[3]);
  else {
    solution(iterator);
    console.log(dp[iterator]);
  }
}
