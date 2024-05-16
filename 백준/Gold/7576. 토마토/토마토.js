let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(" ").map(Number));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const bfs = (start) => {
  const queue = start.map(pos => [...pos, 0]);
  let index = 0; // 큐의 시작 인덱스
  let date = 0;

  while (index < queue.length) {
    const [qy, qx, day] = queue[index++];
    date = day;

    for (let i = 0; i < 4; i++) {
      const my = qy + dy[i];
      const mx = qx + dx[i];

      if (my < 0 || my >= N || mx < 0 || mx >= M) continue;

      if (map[my][mx] === 0) {
        map[my][mx] = 1; // 익은 토마토로 변경
        queue.push([my, mx, day + 1]);
      }
    }
  }

  return date;
};

const findRipeTomato = () => {
  const arr = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1) arr.push([i, j]);
    }
  }

  return arr;
};

const hasNonRipeTomato = () => {
  for (const row of map) {
    if (row.includes(0)) return true;
  }
  return false;
};

const result = bfs(findRipeTomato());

console.log(hasNonRipeTomato() ? -1 : result);
