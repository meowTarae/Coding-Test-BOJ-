let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
const [A, B] = input
  .filter((_, idx) => idx % 2 === 1)
  .map((v) => v.split(" ").map(Number));

A.sort((a, b) => a - b);

B.forEach((v) => {
  let start = 0;
  let end = input[0] - 1;
  let res = false;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (v < A[mid]) {
      end = mid - 1;
    } else if (v > A[mid]) {
      start = mid + 1;
    } else if (v === A[mid]) {
      res = true;
      break;
    }
  }

  res === true ? result.push(1) : result.push(0);
});

console.log(result.join("\n"));
