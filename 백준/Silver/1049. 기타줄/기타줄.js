const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const p1 = [];
const p2 = [];

for (const element of input) {
  const [e1, e2] = element.split(" ").map(Number);

  p1.push(e1);
  p2.push(e2);
}

p1.sort((a, b) => a - b);
p2.sort((a, b) => a - b);

const case1 = (Math.floor(N / 6) + 1) * p1[0];
const case2 = N * p2[0];
const case3 = Math.floor(N / 6) * p1[0] + (N % 6) * p2[0];

console.log(Math.min(case1, case2, case3));
