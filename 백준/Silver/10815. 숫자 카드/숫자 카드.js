let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const M = +input[2];
const arrN = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arrM = input[3].split(" ").map(Number);

const findNumber = (start, end, findNum, array) => {
  let flag = false;

  while (start <= end) {
    const mid = ~~((start + end) / 2);
    const arrNum = array[mid];

    if (arrNum < findNum) start = mid + 1;
    else if (arrNum > findNum) end = mid - 1;
    else {
      flag = true;
      break;
    }
  }

  return flag;
};

const result = [];
for (const num of arrM) {
  const hasNumber = findNumber(0, N - 1, num, arrN);
  result.push(hasNumber ? 1 : 0);
}

console.log(...result);
