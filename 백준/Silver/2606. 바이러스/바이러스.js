// DFS, BFS 두 방식 모두 풀어봄으로써 어느 방식이 더 빠른지 확인해보자.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// node 갯수
const n = input.shift();
//간선 갯수
const m = input.shift();

const graph = Array(+n + 1)
  .fill()
  .map(() => []);

for (let i = 0; i < m; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  !graph[from].includes(to) && graph[from].push(to);
  !graph[to].includes(from) && graph[to].push(from);
}

const visit = Array(+n + 1).fill(false);
const result = [];

const DFS = (node) => {
  visit[node] = true;
  node !== 1 && result.push(node);

  for (const item of graph[node]) {
    !visit[item] && DFS(item);
  }
};

DFS(1);
console.log(result.length);
