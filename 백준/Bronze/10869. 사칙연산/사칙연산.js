let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(~~(A/B));
console.log(A%B);
