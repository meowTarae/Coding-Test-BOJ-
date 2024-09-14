const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +fs.readFileSync(filePath).toString().trim();

let zero = 1n;
let one = 0n;

for (let i = 2; i < N; i++) {
  const current_zero = zero + one;
  const current_one = zero;

  zero = current_zero;
  one = current_one;
}

console.log((zero + one).toString());
