let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array(M).fill();
const visited = Array(N + 1).fill(false);

const dfs = (n, k) => {
  if (n === M) {
    console.log(...arr);
    return;
  }

  for (let i = k; i <= N; i++) {
    arr[n] = i;
    dfs(n + 1, i);
  }
};

dfs(0, 1);