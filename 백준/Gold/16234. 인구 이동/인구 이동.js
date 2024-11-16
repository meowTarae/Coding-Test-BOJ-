let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, L, R] = input.shift().split(" ").map(Number);
const map = input.map((v1) => v1.split(" ").map(Number));

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const BFS = (y, x, visited) => {
  const queue = [[y, x]];
  const union = [[y, x]];
  let sum = map[y][x];

  visited[y][x] = true;

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = qy + dir[i][0];
      const nx = qx + dir[i][1];

      if (ny < 0 || ny >= N || nx < 0 || nx >= N || visited[ny][nx]) continue;

      const gap = Math.abs(map[qy][qx] - map[ny][nx]);
      if (gap >= L && gap <= R) {
        queue.push([ny, nx]);
        union.push([ny, nx]);
        sum += map[ny][nx];
        visited[ny][nx] = true;
      }
    }
  }

  return { union, sum };
};

let result = 0;

while (1) {
  const visited = Array(N)
    .fill(0)
    .map((_) => Array(N).fill(false));
  let flag = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const { union, sum } = BFS(i, j, visited);

        if (union.length > 1) {
          const people = Math.floor(sum / union.length);

          union.forEach(([y, x]) => (map[y][x] = people));
          flag = true;
        }
      }
    }
  }

  if (!flag) break;

  result += 1;
}

console.log(result);
