const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, r, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (n, row, col) => {
  if (n === 0) return 0;

  const half = 2 ** (n - 1);
  const size = half ** 2;

  if (row < half && col < half) {
    // 1사분면
    return solution(n - 1, row, col);
  } else if (row < half && col >= half) {
    // 2사분면
    return size + solution(n - 1, row, col - half);
  } else if (row >= half && col < half) {
    // 3사분면
    return size * 2 + solution(n - 1, row - half, col);
  } else {
    // 4사분면
    return size * 3 + solution(n - 1, row - half, col - half);
  }
};

console.log(solution(N, r, c));
