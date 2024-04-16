const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = Array(+N)
  .fill()
  .map((_, idx) => input[idx].split(" ").map(Number));
arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let count = 1;
let standard = arr[0][1];
for (let i = 1; i < +N; i++) {
  if (arr[i][0] >= standard) {
    standard = arr[i][1];
    count++;
  }
}

console.log(count);
