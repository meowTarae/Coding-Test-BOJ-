let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = [null, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

for (let i = 11; i <= 100; i++) {
  arr[i] = arr[i - 1] + arr[i - 5];
}

input.shift();
for (const v of input) {
  console.log(arr[v]);
}
