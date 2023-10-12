const fs = require('fs');
const [length, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.map(v=>v.split(' ').map(Number))

const createMap = (M, N) => {
  return Array(N)
    .fill()
    .map((_) => [...Array(M).fill(0)]);
};

function soluction(M, N, map) {
  const visited = createMap(M, N);

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let count = 0;
  const BFS = (x, y) => {
    visited[x][y] = 1;
    const queue = [[x, y]];

    while (queue.length) {
      const [qx, qy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const mx = qx + dx[i];
        const my = qy + dy[i];

        if (mx >= 0 && mx < N && my >= 0 && my < M) {
          if (map[mx][my] === 1 && !visited[mx][my]) {
            queue.push([mx, my]);
            visited[mx][my] = 1;
          }
        }
      }
    }
    count++;
  };

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (map[x][y] && !visited[x][y]) BFS(x, y);
    }
  }

  return count;
}

const storage = [];
for (let i = 0; i < inputArr.length; i++) {
  const [M, N, K] = inputArr[i];

  const map = createMap(M, N);
  for (let j = i + 1; j < K + i + 1; j++) {
    const [y, x] = inputArr[j];
    map[x][y] = 1;
  }

  storage.push([M, N, map]);
  i += K;
}

for (const [M, N, map] of storage) {
  console.log(soluction(M, N, map));
}
