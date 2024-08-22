const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, K] = fs.readFileSync(filePath).toString().trim().split(" ");

const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(N) / (factorial(N - K) * factorial(K)));
