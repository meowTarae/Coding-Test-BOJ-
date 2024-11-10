let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const solution = (a, b, c) => {
  if (b === 0n) return 1n;

  let half = solution(a, b / 2n, c);
  half = (half * half) % c;

  return b % 2n === 0n ? half : (half * a) % c;
};

console.log(solution(a, b, c).toString());
