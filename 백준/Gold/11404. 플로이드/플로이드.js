const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.splice(0, 2).map(Number);
const graph = Array(N)
  .fill()
  .map((_) => Array(N).fill(Infinity));

for (let i = 0; i < N; i++) {
  graph[i][i] = 0;
}

for (let i = 0; i < M; i++) {
  const [from, to, value] = input[i].split(" ").map(Number);
  if (graph[from - 1][to - 1] && graph[from - 1][to - 1] > value) {
    graph[from - 1][to - 1] = value;
  }
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][k] !== Infinity && graph[k][j] !== Infinity) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }
}

console.log(
  graph
    .map((row) =>
      row.map((value) => (value === Infinity ? 0 : value)).join(" ")
    )
    .join("\n")
);
