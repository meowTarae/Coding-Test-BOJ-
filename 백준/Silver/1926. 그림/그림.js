let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [input, ...map] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, M] = input;
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const solution = (y, x) => {
  map[y][x] = 0;
  const queue = [[y, x]];
  let paintingSize = 1;

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const my = qy + dir[i][0];
      const mx = qx + dir[i][1];

      if (my < 0 || my >= N || mx < 0 || mx >= M || map[my][mx] === 0) continue;

      map[my][mx] = 0;
      queue.push([my, mx]);
      paintingSize += 1;
    }
  }

  return paintingSize;
};

let result = 0;
const size = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) continue;

    const paintingSize = solution(i, j);
    result += 1;
    size.push(paintingSize);
  }
}

console.log(result);
console.log(size.length ? Math.max(...size) : 0);
