const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();

const isInnerPoint = (x, y, c1, c2, r) => {
  const distance = Math.sqrt(Math.pow(c1 - x, 2) + Math.pow(c2 - y, 2));

  return r > distance;
};

const solution = (x1, y1, x2, y2, coordinates) => {
  let count = 0;

  for (const [c1, c2, r] of coordinates) {
    let flag1 = false,
      flag2 = false;

    flag1 = isInnerPoint(x1, y1, c1, c2, r);
    flag2 = isInnerPoint(x2, y2, c1, c2, r);

    if ((flag1 && flag2) || (!flag1 && !flag2)) continue;

    count += 1;
  }

  return count;
};

for (let i = 0; i < T; i++) {
  const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
  const n = +input.shift();
  const coordinates = input.splice(0, n).map((v) => v.split(" ").map(Number));

  const result = solution(x1, y1, x2, y2, coordinates);

  console.log(result);
}
