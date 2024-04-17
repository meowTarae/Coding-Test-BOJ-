const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [A, B] = input.map((v) => v.split(" ").map(Number));

const a = [...A].sort((a, b) => a - b);
const b = [...B].sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += a[i] * b[i];
}

console.log(sum);
