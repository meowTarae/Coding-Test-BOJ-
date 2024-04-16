const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("-");

let result = 0;
for (let i = 0; i < input.length; i++) {
  const bundle = input[i].split("+").map(Number);
  const num = bundle.reduce((a, b) => a + b);
  if (i === 0) {
    result += num;
  } else {
    result -= num;
  }
}

console.log(result);
