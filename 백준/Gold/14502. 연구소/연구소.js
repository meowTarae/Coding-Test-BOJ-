let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

const map = input.map((v) => v.split(" "));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const result = [];

const virus = [];
const emptyArea = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "0") emptyArea.push([i, j]);
    if (map[i][j] === "2") virus.push([i, j]);
  }
}

const countSafetyArea = (map) => {
  let count = 0;

  map.forEach((v1) => v1.forEach((v2) => v2 === "0" && count++));

  return count;
};

const BFS = (map, pos) => {
  const copyMap = map.map((v) => [...v]);
  const queue = [...virus];

  for (let i = 0; i < 3; i++) {
    const [y, x] = pos[i];
    copyMap[y][x] = "1";
  }

  while (queue.length) {
    const [qy, qx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const my = qy + dy[i];
      const mx = qx + dx[i];

      if (my >= 0 && mx >= 0 && my < N && mx < M && copyMap[my][mx] === "0") {
        copyMap[my][mx] = "2";
        queue.push([my, mx]);
      }
    }
  }

  return countSafetyArea(copyMap);
};

const emptyAreaLength = emptyArea.length;

for (let i = 0; i < emptyAreaLength - 2; i++) {
  for (let j = i + 1; j < emptyAreaLength - 1; j++) {
    for (let k = j + 1; k < emptyAreaLength; k++) {
      const pos = [emptyArea[i], emptyArea[j], emptyArea[k]];
      const count = BFS(map, pos);
      result.push(count);
    }
  }
}

console.log(Math.max(...result));
