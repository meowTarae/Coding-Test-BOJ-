let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [length, numbers] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = length.split(" ").map(Number);
const arr = numbers
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const visited = Array(N + 1).fill(false);
const result = Array(M).fill();

const dfs = (n) => {
  if (n === M) {
    console.log(...result);
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    result[n] = arr[i - 1];
    visited[i] = true;
    dfs(n + 1);
    visited[i] = false;
  }
};

dfs(0);
