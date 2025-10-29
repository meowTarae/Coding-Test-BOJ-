let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = Array(N)
  .fill(0)
  .map((_, i) => i + 1);
let len = 0;
const result = [];

while (len < N) {
  for (let i = 0; i < K; i++) {
    const num = arr.shift();

    i === K - 1 ? (result.push(num), len++) : arr.push(num);
  }
}

console.log("<" + result.join(", ") + ">");
