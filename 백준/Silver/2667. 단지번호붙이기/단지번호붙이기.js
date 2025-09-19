let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const map = input.map((v1) => v1.split("").map((v2) => Number(v2)));
const visited = Array(N)
  .fill()
  .map(() => Array(N).fill(false));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const result = [];

const BFS = (y, x) => {
  const queue = [[y, x]];
  visited[y][x] = true;
  let count = 1;

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = qy + dir[i][0];
      const nx = qx + dir[i][1];

      if (ny < 0 || ny >= N || nx < 0 || nx >= N || visited[ny][nx]) continue;
      if (map[ny][nx] !== 1) continue;

      queue.push([ny, nx]);
      visited[ny][nx] = true;
      count++;
    }
  }

  result.push(count);
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] === true || map[i][j] !== 1) continue;

    BFS(i, j);
  }
}

console.log(result.length);
result.sort((a, b) => a - b).forEach((v) => console.log(v));
