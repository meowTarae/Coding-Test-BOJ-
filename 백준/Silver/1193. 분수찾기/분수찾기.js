let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

let num = 0;
let count = 0;

while (num < input) {
  count++;
  num += count;
}

let offset = num - input;
let x, y;

if (count % 2 === 1) {
  x = 1 + offset;
  y = count - offset;
} else {
  x = count - offset;
  y = 1 + offset;
}

console.log(x + "/" + y);
