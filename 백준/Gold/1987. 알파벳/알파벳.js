let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [input, ...rest] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [R, C] = input.split(" ").map(Number);
const board = rest.map((v) => v.split(""));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const visit = Array(26).fill(false);
let result = 0;

const DFS = (y, x, count) => {
  result = Math.max(result, count);

  for (let i = 0; i < 4; i++) {
    const my = y + dir[i][0];
    const mx = x + dir[i][1];

    if (my < 0 || my >= R || mx < 0 || mx >= C) continue;

    const alphabetIdx = board[my][mx].charCodeAt() - 65;
    if (visit[alphabetIdx]) continue;

    visit[alphabetIdx] = true;
    DFS(my, mx, count + 1);
    visit[alphabetIdx] = false;
  }
};

visit[board[0][0].charCodeAt() - 65] = true;
DFS(0, 0, 1);
console.log(result);
