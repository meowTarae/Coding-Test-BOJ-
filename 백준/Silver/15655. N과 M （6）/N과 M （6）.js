let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [input, rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.split(" ").map(Number);
const values = rest
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const visited = Array(N).fill(false);

const dfs = (num, arr) => {
  if (arr.length === M) {
    let result = "";
    for (const element of arr) {
      result += values[element] + "" + " ";
    }

    console.log(result);

    return;
  }

  for (let i = num; i < N; i++) {
    if (visited[i]) continue;

    arr.push(i);
    visited[i] = true;
    dfs(i, arr);
    arr.pop();
    visited[i] = false;
  }
};

dfs(0, []);