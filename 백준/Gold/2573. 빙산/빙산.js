let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [Y, X] = input.shift().split(" ").map(Number);
const map = input.map((v1) => v1.split(" ").map(Number));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let result = 1;

const checkSeaArea = (y, x) => {
  let count = 0;

  for (let i = 0; i < 4; i++) {
    const ny = y + dir[i][0];
    const nx = x + dir[i][1];

    if (ny < 0 || nx < 0 || ny >= Y || nx >= X) continue;
    if (map[ny][nx] !== 0) continue;

    count += 1;
  }

  return count;
};

const BFS = (y, x, visited) => {
  const queue = [[y, x]];
  visited[y][x] = true;

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = qy + dir[i][0];
      const nx = qx + dir[i][1];

      if (ny < 0 || nx < 0 || ny >= Y || nx >= X) continue;
      if (visited[ny][nx] || map[ny][nx] === 0) continue;

      visited[ny][nx] = true;
      queue.push([ny, nx]);
    }
  }
};

while (1) {
  let count = 0;
  const visited = Array(Y)
    .fill(0)
    .map((_) => Array(X).fill(false));

  const arr = [];
  for (let i = 0; i < Y; i++) {
    for (let j = 0; j < X; j++) {
      if (map[i][j] === 0) continue;

      const num = checkSeaArea(i, j);
      arr.push([i, j, num]);
    }
  }

  for (const [y, x, num] of arr) {
    map[y][x] = map[y][x] - num < 0 ? 0 : map[y][x] - num;
  }

  for (let i = 0; i < Y; i++) {
    for (let j = 0; j < X; j++) {
      if (map[i][j] === 0) continue;
      if (visited[i][j]) continue;

      BFS(i, j, visited);
      count += 1;
    }
  }

  if (count >= 2) {
    console.log(result);
    return;
  } else if (count === 0) {
    console.log(0);
    return;
  }

  result += 1;
}