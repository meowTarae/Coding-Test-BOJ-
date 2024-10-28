let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [[N, M], input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
input.sort((a,b)=>a-b);

const visited = Array(N).fill(false);

const dfs = (arr) => {
  if (arr.length === M) {
    console.log(...arr);
    return;
  }

  let prev = 0;
  for (let i = 0; i < N; i++) {
    if (visited[i] || input[i] === prev) continue;

    visited[i] = true;
    dfs([...arr, input[i]]);
    visited[i] = false;
    prev = input[i];
  }
};

dfs([]);
