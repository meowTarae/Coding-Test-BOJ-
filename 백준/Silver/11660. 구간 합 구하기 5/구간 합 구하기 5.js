let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [NM, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = NM.split(" ").map(Number);
const map = [];
const section = [];
for (let i = 0; i < N; i++) map.push(rest[i].split(" ").map(Number));
for (let i = N; i < N + M; i++) section.push(rest[i].split(" ").map(Number));

const acc = Array(N + 1)
  .fill(0)
  .map((_) => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    acc[i][j] = acc[i][j - 1] + map[i - 1][j - 1];
  }
}

const r = [];
for (let i = 0; i < section.length; i++) {
  let sum = 0;
  const [y1, x1, y2, x2] = section[i];

  for (let i = y1; i <= y2; i++) {
    sum += acc[i][x2] - acc[i][x1 - 1];
  }
  r.push(sum);
}

console.log(r.join("\n"));
