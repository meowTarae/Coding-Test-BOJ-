let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const cases = input.map(Number);

for (const num of cases) {
  const a = Math.floor(num / 25);
  const b = Math.floor((num - a * 25) / 10);
  const c = Math.floor((num - a * 25 - b * 10) / 5);
  const d = Math.floor(num - a * 25 - b * 10 - c * 5);
  
  console.log(a, b, c, d);
}
