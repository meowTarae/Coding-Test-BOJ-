let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const [N, M] = input.shift().split(" ").map(Number);
const visited = Array(N)
  .fill()
  .map((_) => Array(M).fill(false));
const graph = input.map((v) => v.split(" ").map(Number));

const start = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 2) {
      graph[i][j] = 0;
      start.push([i, j]);
      break;
    }
  }
}

const checkCanNotReachable = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        graph[i][j] = -1;
      }
    }
  }
};

const BFS = (start) => {
  const queue = start;

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const my = qy + dy[i];
      const mx = qx + dx[i];

      if (my < 0 || my >= N || mx < 0 || mx >= M) continue;

      if (graph[my][mx] === 1 && !visited[my][mx]) {
        graph[my][mx] = graph[qy][qx] + 1;
        visited[my][mx] = true;
        queue.push([my, mx]);
      }
    }
  }

  checkCanNotReachable();
};

BFS(start);

console.log(graph.map((v) => v.join(" ")).join("\n"));
