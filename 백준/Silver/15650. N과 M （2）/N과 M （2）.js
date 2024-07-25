let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array(M).fill("");
const visited = Array(N + 1).fill(false);

const dfs = (n, cnt) => {
  if (n === M) {
    console.log(...arr);
    return;
  }

  for (let i = cnt; i <= N; i++) {
    if (visited[i]) continue;

    arr[n] = i;
    visited[i] = true;
    dfs(n + 1, i);
    visited[i] = false;
  }
};

dfs(0, 1);
