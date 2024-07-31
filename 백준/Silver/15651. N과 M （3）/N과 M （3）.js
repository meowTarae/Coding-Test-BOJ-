let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [];
let result = "";

function dfs(v) {
  if (v === M) {
    result += arr.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    arr.push(i + 1);
    dfs(arr.length);
    arr.pop();
  }
}

dfs(0);

console.log(result.slice(0, -1));
