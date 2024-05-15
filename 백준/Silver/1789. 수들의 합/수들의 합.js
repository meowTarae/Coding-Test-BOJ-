let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input;
let result = 0;
while (num - result >= 0) {
  num -= result;
  result += 1;
}
console.log(result - 1);
