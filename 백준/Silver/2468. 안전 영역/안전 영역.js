let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const map = input.map((v) => v.split(" ").map(Number));
const totalMaxValue = Math.max(...map.flat());
let result = 0;

const BFS = (y, x, height, visited) => {
  const queue = [[y, x]];
  visited[y][x] = true;

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const my = qy + dir[i][0];
      const mx = qx + dir[i][1];

      if (my < 0 || my >= N || mx < 0 || mx >= N || visited[my][mx]) continue;

      if (map[my][mx] > height) {
        visited[my][mx] = true;
        queue.push([my, mx]);
      }
    }
  }
};

for (let height = 0; height <= totalMaxValue; height++) {
  let count = 0;
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (map[y][x] > height && !visited[y][x]) {
        BFS(y, x, height, visited);
        count += 1;
      }
    }
  }

  result = Math.max(result, count);
}

console.log(result);
