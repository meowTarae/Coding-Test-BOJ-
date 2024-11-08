let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const getCount = (num) => {
  let count = 0;

  for (let i = 1; i <= N; i++) {
    const calc = parseInt(num / i);
    count += calc > N ? N : calc;
  }

  return count;
};

let left = 1;
let right = N ** 2;
let result = 0;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  const count = getCount(mid);

  count >= k ? ((result = mid), (right = mid - 1)) : (left = mid + 1);
}

console.log(result);
