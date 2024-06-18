let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const regexp = /^[A-F]?A+F+C+[A-F]?$/;
const N = +input.shift();

for (const v of input) {
  console.log(regexp.test(v) ? "Infected!" : "Good");
}
