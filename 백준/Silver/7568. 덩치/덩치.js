let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const table = input.map((v) => v.split(" ").map(Number));
const result = Array(+N).fill(1);

for (let i = 0; i < N; i++) {
  const [w1, h1] = table[i];

  for (let j = 0; j < N; j++) {
    if (i === j) continue;

    const [w2, h2] = table[j];

    if (w1 < w2 && h1 < h2) result[i] += 1;
  }
}

console.log(...result);
