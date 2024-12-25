let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [count, ...graph] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const solution = ([V, E], list) => {
  let result = 0;
  const graph = Array(V + 1)
    .fill(0)
    .map((_, i) => i);
  let edges = V - 1;

  list.sort((a, b) => a[2] - b[2]);

  const find = (n) => {
    if (graph[n] === n) return n;

    return (graph[n] = find(graph[n]));
  };

  const union = (n1, n2) => {
    n1 = find(n1);
    n2 = find(n2);

    n1 > n2 ? (graph[n1] = n2) : (graph[n2] = n1);
  };

  for (let i = 0; i < E; i++) {
    const [A, B, C] = list[i];

    if (find(A) !== find(B)) {
      result += C;
      edges--;
      union(A, B);
      if (!edges) break;
    }
  }

  return result;
};

const answer = solution(
  count.split(" ").map(Number),
  graph.map((v) => v.split(" ").map(Number))
);

console.log(answer);
