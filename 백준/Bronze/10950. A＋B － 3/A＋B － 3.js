let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();

for (const ele of input) {
  const [a, b] = ele.split(" ").map(Number);
  console.log(a + b);
}
