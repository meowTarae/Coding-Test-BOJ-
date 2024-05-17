let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// Todo: 만약, 저장될 때부터 모든 토마토가 익어있는 상태이면 0을 출력해
// Todo: 만약, 토마토가 모두 익지는 못하는 상황이면 -1을 출력해야

const [M, N, H] = input.shift().split(" ").map(Number);
const map = [];
const arr = input.map((v) => v.split(" ").map(Number));
for (let i = 0; i < H; i++) {
  map.push(arr.splice(0, N));
}

const dz = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dx = [0, 0, 0, 0, -1, 1];

const BFS = (start) => {
  const queue = start;
  let index = 0;
  let day = 0;

  while (queue.length > index) {
    const [qz, qy, qx, qDate] = queue[index++];
    day = qDate;

    for (let i = 0; i < 6; i++) {
      const mz = qz + dz[i];
      const my = qy + dy[i];
      const mx = qx + dx[i];

      if (mz < 0 || mz >= H || my < 0 || my >= N || mx < 0 || mx >= M) continue;

      if (map[mz][my][mx] === 0) {
        map[mz][my][mx] = 1;
        queue.push([mz, my, mx, qDate + 1]);
      }
    }
  }

  return day;
};

const findRipeIndex = () => {
  const index = [];

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (map[i][j][k] === 1) index.push([i, j, k, 0]);
      }
    }
  }

  return index;
};

const checkNonRipeTomato = () => {
  for (const n of map) {
    for (const m of n) {
      if (m.includes(0)) return true;
    }
  }

  return false;
};

const result = BFS(findRipeIndex());
console.log(checkNonRipeTomato() ? -1 : result);
