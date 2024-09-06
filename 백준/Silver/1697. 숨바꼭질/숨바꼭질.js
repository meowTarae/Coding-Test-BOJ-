const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visit = Array(10001).fill(0);

const bfs = (num, cnt) => {
  const queue = [[num, cnt]];
  visit[num] = 1;

  while (queue.length) {
    const [n, c] = queue.shift();

    if (n === K) return c;

    for (const next of [n * 2, n - 1, n + 1]) {
      if (!visit[next] && next <= 100000 && next >= 0) {
        visit[next] = 1;
        queue.push([next, c + 1]);
      }
    }
  }
};

console.log(bfs(N, 0));
