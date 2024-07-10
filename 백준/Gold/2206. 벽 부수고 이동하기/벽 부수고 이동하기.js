let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.array = [];
    this.head = 0;
    this.tail = 0;
  }

  push(value) {
    this.array[this.tail++] = value;
  }

  pop() {
    this.head++;
  }

  front() {
    return this.array[this.head];
  }

  rear() {
    return this.array[this.tail - 1];
  }

  isEmpty() {
    return this.head === this.tail;
  }

  size() {
    return Math.abs(this.head - this.tail);
  }
}

const [N, M] = input.shift().split(" ").map(Number);
const map = Array.from({ length: N }, () => Array(M).fill(null));
// console.log(map);
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(2).fill(false))
);
const count = Array.from({ length: N }, () => Array(M).fill(0));
const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

for (let i = 0; i < N; i++) {
  const temp = input[i];
  for (let j = 0; j < M; j++) {
    map[i][j] = +temp[j];
  }
}


const bfs = () => {
  const queue = new Queue();
  queue.push([0, 0, 0]); 
  visited[0][0][0] = true;
  count[0][0] = 1;

  while (!queue.isEmpty()) {
    const [x, y, wall] = queue.front();
    queue.pop();

    if (x === N - 1 && y === M - 1) {
      console.log(count[x][y]);
      return;
    }

    for (let k = 0; k < 4; k++) {
      const nx = x + direction[k][0];
      const ny = y + direction[k][1];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      if (map[nx][ny] === 1 && wall === 0 && !visited[nx][ny][1]) {
        visited[nx][ny][1] = true;
        count[nx][ny] = count[x][y] + 1;
        queue.push([nx, ny, 1]);
      }

      if (map[nx][ny] === 0 && !visited[nx][ny][wall]) {
        visited[nx][ny][wall] = true;
        count[nx][ny] = count[x][y] + 1;
        queue.push([nx, ny, wall]);
      }
    }
  }

  console.log(-1);
}

bfs();
