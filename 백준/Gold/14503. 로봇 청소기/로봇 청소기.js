let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [[N, M], [r, c, d], ...map] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const dir = [
  // 북 동 남 서
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let result = 0;
let flag = true;

while (flag) {
  if (map[r][c] === 0) {
    map[r][c] = 2;
    result++;
  }

  let cleaned = false;
  for (let i = 0; i < 4; i++) {
    d = (d + 3) % 4;

    const dr = r + dir[d][0];
    const dc = c + dir[d][1];

    if (map[dr][dc] === 0) {
      r = dr;
      c = dc;
      cleaned = true;
      break;
    }
  }

  if (!cleaned) {
    const 뒤쪽방향 = (d + 2) % 4;
    const dr = r + dir[뒤쪽방향][0];
    const dc = c + dir[뒤쪽방향][1];

    if (map[dr][dc] === 1) {
      flag = false;
    } else {
      r = dr;
      c = dc;
    }
  }
}

console.log(result);
