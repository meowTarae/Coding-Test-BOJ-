let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [M, N] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const 소수판별함수 = (number) => {
  if (number === 1) return false;
  if (number === 2 || number === 3) return true;

  const sqrt = Math.sqrt(number);

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) return false;
  }

  return true;
};

const result = [];
for (let i = M; i <= N; i++) {
  소수판별함수(i) && result.push(i);
}

console.log(result.join("\n"));
