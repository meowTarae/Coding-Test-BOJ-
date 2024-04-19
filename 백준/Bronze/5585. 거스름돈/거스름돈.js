const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [input] = fs.readFileSync(filePath).toString().trim().split(" ");

const 동전들 = [500, 100, 50, 10, 5, 1];
let 거스름돈 = 1000 - +input;
let 결과 = 0;

for (const 동전 of 동전들) {
  if (거스름돈 / 동전 < 1) continue;

  결과 += Math.floor(거스름돈 / 동전);
  거스름돈 %= 동전;
}

console.log(결과);
