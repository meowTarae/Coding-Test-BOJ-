let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const getLastNum = (num) => {
  return +(num + "").at(-1);
};

const removeLastNum = (num) => {
  return +(num + "").slice(0, -1);
};

const solution = (A, B) => {
  let answer = 0;

  while (A !== B) {
    if (A > B) return -1;

    getLastNum(B) === 1 ? (B = removeLastNum(B)) : (B /= 2);

    answer += 1;
  }

  return answer + 1;
};

const answer = solution(A, B);
console.log(answer);
