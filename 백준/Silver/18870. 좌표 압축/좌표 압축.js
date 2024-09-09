const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[0].split(" ").map(Number);
const set = new Set([...arr].sort((a, b) => a - b));
const obj = {};
const result = [];

let i = 0;
set.forEach((v) => {
  obj[v] = i;
  i += 1;
});

for (const v of arr) {
  result.push(obj[v]);
}

console.log(...result);
