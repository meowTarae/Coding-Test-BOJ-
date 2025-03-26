let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const visited = Array(N + 1).fill(false);
const result = [];

const dfs = (arr) => {
  if (arr.length === M) {
    console.log(...arr);
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    arr.push(i);
    dfs(arr);
    visited[i] = false;
    arr.pop();
  }
};

dfs([]);