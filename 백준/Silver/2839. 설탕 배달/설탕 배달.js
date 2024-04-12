const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const kilogram = +input;
const arr = [];

for (let i = 0; i <= kilogram / 5; i++) {
  const a = i * 5;
  const b = (kilogram - a) % 3;

  if (!b) arr.push(i + (kilogram - a) / 3);
}

console.log(arr.length ? Math.min(...arr) : -1);
