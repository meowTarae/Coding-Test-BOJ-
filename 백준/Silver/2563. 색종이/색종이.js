let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const positions = input.map((v) => v.split(" ").map(Number));
const maxLength = 101;
const map = Array(maxLength)
  .fill(0)
  .map((_) => Array(maxLength).fill(0));

for (const pos of positions) {
  const [y, x] = pos;

  for (let i = y; i < y + 10; i++) {
    for (let j = x; j < x + 10; j++) {
      map[i][j] = 1;
    }
  }
}

let count = 0;
map.forEach((v1) => v1.forEach((v2) => v2 === 1 && count++));

console.log(count);
