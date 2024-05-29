const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const map = [];
for (let i = 0; i < 5; i++) {
  map.push(input[i].split(" ").map(Number));
}

const bingoNumArr = [];
for (let i = 5; i < 10; i++) {
  const arr = input[i].split(" ");
  for (const num of arr) {
    bingoNumArr.push(+num);
  }
}

const countBingo = () => {
  let count = 0;

  // 가로줄 체크
  for (const arr of map) {
    const isBingo = (v) => !v;
    arr.every(isBingo) && count++;
  }

  // 세로줄 체크
  for (let i = 0; i < 5; i++) {
    if (!map[0][i] && !map[1][i] && !map[2][i] && !map[3][i] && !map[4][i])
      count++;
  }

  // 대각선 체크
  if (!map[0][0] && !map[1][1] && !map[2][2] && !map[3][3] && !map[4][4])
    count++;
  if (!map[0][4] && !map[1][3] && !map[2][2] && !map[3][1] && !map[4][0])
    count++;

  return count;
};

const checkBingoNum = (num) => {
  for (let i = 0; i < 5; i++) {
    const index = map[i].indexOf(num);

    if (index === -1) continue;

    map[i][index] = false;
  }
};

let result = 0;
for (let i = 0; i < bingoNumArr.length; i++) {
  const bingoNum = bingoNumArr[i];

  checkBingoNum(bingoNum);
  result++;

  if (countBingo() >= 3) break;
}

console.log(result);
