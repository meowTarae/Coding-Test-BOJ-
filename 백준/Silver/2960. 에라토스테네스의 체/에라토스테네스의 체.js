const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (N, K) => {
  const arr = Array(N + 1).fill(false);
  arr[0] = true;
  const result = [];

  for (let i = 2; i <= N; i++) {
    const divideNum = ~~(N / i);

    for (let j = 1; j <= divideNum; j++) {
      const num = j * i;
      if (!arr[num]) {
        arr[num] = true;
        result.push(num);
      }
    }
  }

  console.log(result[K - 1]);
};

solution(N, K);
