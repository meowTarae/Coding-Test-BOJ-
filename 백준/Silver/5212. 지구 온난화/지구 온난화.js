let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(""));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const queue = [];
const inspectGround = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // i, j
      if (map[i][j] === ".") continue;

      let count = 0;
      for (let k = 0; k < 4; k++) {
        const dy = i + dir[k][0];
        const dx = j + dir[k][1];

        if (dy < 0 || dx < 0 || dy >= N || dx >= M) {
          count++;
          continue;
        }
        if (map[dy][dx] === ".") count++;
      }

      count >= 3 && queue.push([i, j]);
    }
  }
};
const deleteGround = () => {
  for (const [y, x] of queue) {
    map[y][x] = ".";
  }
};

inspectGround();
deleteGround();

let minR = N,
  maxR = -1,
  minC = M,
  maxC = -1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "X") {
      minR = Math.min(minR, i);
      maxR = Math.max(maxR, i);
      minC = Math.min(minC, j);
      maxC = Math.max(maxC, j);
    }
  }
}

const result = [];

for (let r = minR; r <= maxR; r++) {
  const line = [];
  for (let c = minC; c <= maxC; c++) {
    line.push(map[r][c]);
  }
  result.push(line.join(""));
}

console.log(result.join("\n"));