let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const set = new Set();

for (let i = 1; i <= N / 2; i++) {
  if (N % i === 0) {
    set.add(i);
    set.add(N / i);
  }
}

if (set.size < K) {
  console.log(0);
} else {
  console.log([...set].sort((a, b) => a - b)[K - 1]);
}
