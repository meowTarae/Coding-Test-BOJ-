let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const map = input.map((v) => v.split(" ").map(Number));
const dir = [
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];

const func = (y, x, color, dy, dx) => {
  const ny = y + dy;
  const nx = x + dx;

  if (ny < 0 || nx < 0 || ny >= 19 || nx >= 19 || map[ny][nx] !== color)
    return 1;

  return func(ny, nx, color, dy, dx) + 1;
};

for (let j = 0; j < 19; j++) {
  for (let i = 0; i < 19; i++) {
    if (map[i][j] === 0) continue;

    const color = map[i][j];

    for (let k = 0; k < 8; k++) {
      const [dy, dx] = dir[k];
      const depth = func(i, j, color, dy, dx);

      if (depth === 5) {
        const by = i - dy;
        const bx = j - dx;

        let flag = false;
        if (by >= 0 && bx >= 0 && by < 19 && bx < 19 && map[by][bx] === color)
          flag = true;

        if (!flag) {
          console.log(color);
          console.log(`${i + 1} ${j + 1}`);
          process.exit();
        }
      }
    }
  }
}

console.log(0);