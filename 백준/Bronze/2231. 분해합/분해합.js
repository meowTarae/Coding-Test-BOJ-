let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

for (let i = 1; i < N; i++) {
  const num = [...String(i)].map(Number).reduce((a, b) => a + b);

  if (num + i === N) {
    console.log(i);
    return;
  }
}

console.log(0);
