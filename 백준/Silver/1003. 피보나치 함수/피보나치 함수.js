const fs = require("fs");
const [_, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
for (const ele of input) {
  solution(+ele);
}

function solution(n) {
  if (n === 0) {
    console.log("1 0");
    return;
  } else if (n === 1) {
    console.log("0 1");
    return;
  }

  const fibo = Array(n + 1).fill([0, 0]);

  fibo[0] = [1, 0];
  fibo[1] = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    fibo[i] = [
      fibo[i - 1][0] + fibo[i - 2][0],
      fibo[i - 1][1] + fibo[i - 2][1],
    ];
  }

  console.log(fibo[n].join(" "));
}
