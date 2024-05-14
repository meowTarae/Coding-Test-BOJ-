let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const graph = [];
for (const iter of input) {
  const arr = iter.split("").map(Number);
  graph.push(arr);
}
const visited = Array(N)
  .fill()
  .map((_) => Array(M).fill(false));

const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[y][x] = true;

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const my = qy + dy[i];
      const mx = qx + dx[i];

      if (my < 0 || my >= N || mx < 0 || mx >= M) continue;

      if (graph[my][mx] === 1 && !visited[my][mx]) {
        graph[my][mx] = graph[qy][qx] + 1;
        queue.push([my, mx]);
      }
    }
  }
};

bfs(0, 0);
console.log(graph[N - 1][M - 1]);
