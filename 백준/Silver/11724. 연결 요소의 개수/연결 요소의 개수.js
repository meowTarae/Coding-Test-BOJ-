const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const graph = Array(n + 1)
  .fill()
  .map(() => []);

for (let i = 0; i < m; i++) {
  const [from, to] = input[i].split(" ");
  !graph[+from].includes(+to) && graph[+from].push(+to);
  !graph[+to].includes(+from) && graph[+to].push(+from);
}

const visit = Array(n + 1).fill(false);
let count = 0;

const DFS = (node) => {
  visit[node] = true;

  for (const leaf of graph[node]) {
    !visit[leaf] && DFS(leaf);
  }
};

for (let i = 1; i <= n; i++) {
  !visit[i] && (DFS(i), count++);
}

console.log(count);
