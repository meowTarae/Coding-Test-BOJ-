let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +fs.readFileSync(filePath).toString().trim();

const visited = [];
let result = 0;

const canIVisit = (y2, x2) => {
  return !visited.some(
    ([y1, x1]) =>
      y1 === y2 || x1 === x2 || Math.abs(y2 - y1) === Math.abs(x2 - x1)
  );
};

const dfs = (y) => {
  if (y === N) {
    result += 1;
    return;
  }

  for (let i = 0; i < N; i += 1) {
    if (!canIVisit(y, i)) continue;

    visited.push([y, i]);
    dfs(y + 1);
    visited.pop();
  }
};

dfs(0);
console.log(result);
