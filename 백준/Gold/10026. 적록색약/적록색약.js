let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

const 지도_일반인 = input.map((v) => [...v]);
const 지도_적록색약 = input.map((v) => [...v]);
지도_적록색약.forEach((arr) =>
  arr.forEach((element, idx) => element === "G" && (arr[idx] = "R"))
);

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const result = [0, 0];

const BFS = ({ map, y, x, 일반인여부 }) => {
  const color = map[y][x];
  map[y][x] = 0;
  const queue = [[y, x]];

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (const [dy, dx] of directions) {
      const my = qy + dy;
      const mx = qx + dx;

      const inBoundary = my >= 0 && my < N && mx >= 0 && mx < N;
      if (inBoundary && map[my][mx] === color) {
        map[my][mx] = 0;
        queue.push([my, mx]);
      }
    }
  }

  일반인여부 ? result[0]++ : result[1]++;
};

const solution = ({ map, 일반인여부 }) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 0) continue;

      BFS({ map, y: i, x: j, 일반인여부 });
    }
  }
};

// 일반인
solution({ map: 지도_일반인, 일반인여부: true });

// 적록색약
solution({ map: 지도_적록색약, 일반인여부: false });

console.log(...result);
