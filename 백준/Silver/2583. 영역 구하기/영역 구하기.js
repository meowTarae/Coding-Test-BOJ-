let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [input, ...position] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const [M, N, _] = input.split(" ").map(Number);
const visited = Array(M)
  .fill(0)
  .map((_) => Array(N).fill(false));

for (const pos of position) {
  const [x1, y1, x2, y2] = pos.split(" ").map(Number);

  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      visited[i][j] = true;
    }
  }
}

let result = 0;
const extent = [];

const BFS = (y, x) => {
  const queue = [[y, x]];
  visited[y][x] = true;
  let count = 1;

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = qy + dir[i][0];
      const nx = qx + dir[i][1];

      if (ny < 0 || ny >= M || nx < 0 || nx >= N || visited[ny][nx]) continue;

      visited[ny][nx] = true;
      queue.push([ny, nx]);
      count += 1;
    }
  }

  extent.push(count);
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j]) continue;

    BFS(i, j);
    result += 1;
  }
}

console.log(result);
console.log(...extent.sort((a, b) => a - b));
