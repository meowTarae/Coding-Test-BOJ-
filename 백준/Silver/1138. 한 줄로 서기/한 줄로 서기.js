let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
const result = Array(N).fill(-1);

for (let i = 0; i < N; i++) {
  const left = arr[i];

  let curLeft = 0;
  for (let j = 0; j < N; j++) {
    if (result[j] === -1 || result[j] > i + 1) curLeft += 1;
    if (result[j] !== -1) continue;

    if (curLeft === left + 1) {
      result[j] = i + 1;
      break;
    }
  }
}

console.log(...result);