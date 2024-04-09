const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const map = Array(n)
  .fill()
  .map((_, idx) => input[idx].split("").map((v) => v === "1"));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const result = [];

const DFS = (y, x) => {
  if (y < 0 || x < 0 || y >= n || x >= n || !map[y][x]) return 0;

  map[y][x] = false;
  let count = 1;

  for (let i = 0; i < 4; i++) {
    const my = y + dy[i];
    const mx = x + dx[i];
    count += DFS(my, mx);
  }

  return count;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j]) {
      result.push(DFS(i, j));
    }
  }
}

console.log(result.length);
result.sort((a, b) => a - b).forEach((v) => console.log(v));
