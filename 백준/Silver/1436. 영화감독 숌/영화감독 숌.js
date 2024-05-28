const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(filePath).toString().trim().split("\n")[0];

let count = 0;
let num = 666;

while (1) {
  if ((num + "").includes("666")) count += 1;
  if (count == input) break;

  num += 1;
}

console.log(num);
