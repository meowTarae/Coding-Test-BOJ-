const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, _] = input.shift().split(" ");
const arr = input.shift().split(" ");
const sum = [0];

for (let i = 1; i <= N; i++) {
  sum[i] = sum[i - 1] + +arr[i - 1];
}

for (const v of input) {
  const [p, n] = v.split(" ");
  console.log(sum[n] - sum[p - 1]);
}
