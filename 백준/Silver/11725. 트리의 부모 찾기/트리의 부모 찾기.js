let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const map = Array(+N + 1)
  .fill(0)
  .map((_) => []);

for (const v of rest) {
  const [from, to] = v.split(" ").map(Number);

  !map[from].includes(to) && map[from].push(to);
  !map[to].includes(from) && map[to].push(from);
}

const visited = Array(+N + 1).fill(false);
const parents = Array(+N + 1).fill(0);

const DFS = (node) => {
  if (visited[node]) return;
  visited[node] = true;

  map[node].forEach((v) => {
    DFS(v);
    parents[v] = node;
  });
};

DFS(1);
console.log(parents.slice(2, N + 1).join("\n"));
