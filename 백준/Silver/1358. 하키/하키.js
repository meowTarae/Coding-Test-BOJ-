const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [rink, ...playersPos] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [rinkW, rinkH, rinkX, rinkY, _] = rink.split(" ").map(Number);
const R = rinkH / 2;
let result = 0;

for (const pos of playersPos) {
  const [x, y] = pos.split(" ").map(Number);

  const isInRectangle = x >= rinkX && x <= rinkX + rinkW && y >= rinkY && y <= rinkY + rinkH;
  const isInLeftCircle = Math.sqrt((rinkX - x) ** 2 + (rinkY + R - y) ** 2) <= R;
  const isInRightCircle = Math.sqrt((rinkX + rinkW - x) ** 2 + (rinkY + R - y) ** 2) <= R;

  (isInRectangle || isInLeftCircle || isInRightCircle) && result++;
}

console.log(result);
