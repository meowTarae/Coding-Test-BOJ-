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

const dfs = (n) => {
  if (n === M) {
    console.log(...arr); 
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    arr[n] = i; 
    visited[i] = true;
    dfs(n + 1); 
    visited[i] = false; 
  }
};

dfs(0); 
