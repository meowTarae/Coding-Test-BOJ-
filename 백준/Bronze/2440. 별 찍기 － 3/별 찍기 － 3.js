const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

for (let i = N; i > 0; i--) {
  console.log("*".repeat(i) + "".repeat(N - i));
}
