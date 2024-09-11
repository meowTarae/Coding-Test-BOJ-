const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +fs.readFileSync(filePath).toString().trim();

let sum = 1;

for (let i = 1; i <= N; i++) {
  sum *= i;
}

console.log(sum);
