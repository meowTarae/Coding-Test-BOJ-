let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const pos = +input[0];
const map = Array(N)
  .fill(0)
  .map((_) => Array(N).fill(0));
const mid = Math.floor(N / 2);
const current = [mid, mid];
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let count = 2;
let flag = true;
const result = [];
map[current[0]][current[1]] = 1;

if (pos === 1) {
  result.push(mid + 1, mid + 1);
}

const increaseCurrent = (num) => {
  current[0] += dir[num][0];
  current[1] += dir[num][1];
};

for (let i = 1; i < N; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < i; k++) {
      let num = -1;
      num = flag ? (j === 0 ? 0 : 1) : j === 0 ? 2 : 3;

      increaseCurrent(num);
      map[current[0]][current[1]] = count;
      count === pos && result.push(current[0] + 1, current[1] + 1);
      count++;
    }
  }

  flag = !flag;
}

for (let i = N - 2; i >= 0; i--) {
  map[i][0] = count;

  count === pos && result.push(i + 1, 1);
  count++;
}

map.forEach((v) => console.log(...v));
console.log(...result);
