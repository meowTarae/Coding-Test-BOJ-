let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [T, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < T; i++) {
  const k = input.shift();
  const n = input.shift();
  const arr = Array(k + 1)
    .fill(0)
    .map((_) => Array(n).fill(0));

  for (let x = 0; x <= k; x++) {
    for (let y = 1; y <= n; y++) {
      if (x === 0) {
        arr[x][y - 1] = y;
        continue;
      }
      if (y === 1) {
        arr[x][0] = 1;
        continue;
      }
      arr[x][y - 1] = arr[x][y - 2] + arr[x - 1][y - 1];
    }
  }

  console.log(arr[k][n - 1]);
}
