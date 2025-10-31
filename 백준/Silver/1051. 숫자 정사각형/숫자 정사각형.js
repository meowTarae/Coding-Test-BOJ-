let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const square = input.map((v) => v.split("").map(Number));
const w = Math.min(N, M);

for (let i = w; i >= 1; i--) {
  for (let j = 0; j <= N - i; j++) {
    for (let k = 0; k <= M - i; k++) {
      const stand = square[j][k];

      if (
        stand !== square[j + i - 1][k] ||
        stand !== square[j][k + i - 1] ||
        stand !== square[j + i - 1][k + i - 1]
      )
        continue;

      console.log(Math.pow(i, 2));
      return;
    }
  }
}
