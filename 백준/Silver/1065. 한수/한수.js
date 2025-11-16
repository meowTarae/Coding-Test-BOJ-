let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let result = 0;

const checkHansoo = (arr, length) => {
  let gap = 0;
  let flag = true;

  if (length <= 2) return true;

  for (let i = 0; i < length - 1; i++) {
    if (!flag) return false;
    if (i === 0) {
      gap = arr[i + 1] - arr[i];
      continue;
    }
    if (arr[i + 1] - arr[i] !== gap) return false;
  }

  return true;
};

for (let i = 1; i <= N; i++) {
  const num = String(i).split("").map(Number);
  const isHansoo = checkHansoo(num, num.length);

  isHansoo && result++;
}

console.log(result);
