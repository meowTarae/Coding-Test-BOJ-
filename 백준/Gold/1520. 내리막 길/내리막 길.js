let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [MN, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = MN.split(" ").map(Number);
const map = rest.map((v) => v.split(" ").map(Number));
const dp = Array(M)
  .fill(0)
  .map((_) => Array(N).fill(-1));
const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const DFS = (y = 0, x = 0) => {
  if (y === M - 1 && x === N - 1) return 1;
  if (dp[y][x] !== -1) return dp[y][x];

  dp[y][x] = 0;

  for (let i = 0; i < 4; i++) {
    const [dy, dx] = direction[i];
    const ny = y + dy;
    const nx = x + dx;

    if (ny < 0 || nx < 0 || ny >= M || nx >= N || map[y][x] <= map[ny][nx])
      continue;

    dp[y][x] += DFS(ny, nx);
  }

  return dp[y][x];
};

console.log(DFS());
