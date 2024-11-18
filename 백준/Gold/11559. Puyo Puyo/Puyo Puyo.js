let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(""));

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const N = input.length;
const M = input[0].length;

const downMap = () => {
  for (let j = 0; j < M; j++) {
    let bottom = N - 1;

    for (let i = N - 1; i >= 0; i--) {
      if (input[i][j] === ".") continue;

      if (i + 1 === N || input[i + 1][j] !== ".") {
        bottom -= 1;
        continue;
      }

      input[bottom][j] = input[i][j];
      input[i][j] = ".";
      bottom -= 1;
    }
  }
};

const BFS = (y, x, visited) => {
  const queue = [[y, x]];
  const currentColor = input[y][x];
  const samePuyo = [[y, x]];
  visited[y][x] = true;

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = qy + dir[i][0];
      const nx = qx + dir[i][1];

      if (ny < 0 || ny >= N || nx < 0 || nx >= M || visited[ny][nx]) continue;
      if (input[ny][nx] !== currentColor) continue;

      queue.push([ny, nx]);
      visited[ny][nx] = true;
      samePuyo.push([ny, nx]);
    }
  }

  return samePuyo.length >= 4 ? samePuyo : [];
};

let 연쇄 = 0;
let loop = true;

while (loop) {
  let flag = false;
  const visited = Array(N)
    .fill(0)
    .map((_) => Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] || input[i][j] === ".") continue;

      const samePyuo = BFS(i, j, visited);

      if (!samePyuo.length) continue;

      samePyuo.forEach(([y, x]) => (input[y][x] = "."));
      flag = true;
    }
  }

  if (flag) {
    연쇄 += 1;
    downMap();
  } else {
    loop = false;
  }
}

console.log(연쇄);
