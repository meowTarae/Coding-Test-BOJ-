let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const map = rest.map((v) => v.split(" ").map(Number));

const getBabySharkPos = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 9) {
        map[i][j] = 0;
        return [i, j];
      }
    }
  }
};

class BabyShark {
  constructor([y, x]) {
    this.level = 2;
    this.exp = 0;
    this.pos = [y, x];
  }

  levelUp() {
    if (this.exp === this.level) {
      this.level += 1;
      this.exp = 0;
    }
  }
}

const babyShark = new BabyShark(getBabySharkPos());

const directions = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

let result = 0;

const findPrey = () => {
  const visited = Array(+N)
    .fill(0)
    .map((_) => Array(+N).fill(false));
  const queue = [[...babyShark.pos, 0]];
  visited[babyShark.pos[0]][babyShark.pos[1]] = true;

  const preys = [];
  let minDistance = Infinity;

  while (queue.length) {
    const [y, x, dist] = queue.shift();

    if (map[y][x] > 0 && map[y][x] < babyShark.level) {
      if (dist <= minDistance) {
        minDistance = dist;
        preys.push([y, x, dist]);
      } else {
        break;
      }
    }

    for (const [dy, dx] of directions) {
      const ny = y + dy;
      const nx = x + dx;

      if (ny >= 0 && ny < N && nx >= 0 && nx < N && !visited[ny][nx]) {
        if (map[ny][nx] <= babyShark.level) {
          visited[ny][nx] = true;
          queue.push([ny, nx, dist + 1]);
        }
      }
    }
  }

  if (preys.length === 0) return null;

  preys.sort(([y1, x1], [y2, x2]) => {
    if (y1 === y2) return x1 - x2;
    return y1 - y2;
  });

  return preys[0];
};

while (1) {
  const prey = findPrey();

  if (!prey) break;

  const [py, px, dist] = prey;

  babyShark.pos = [py, px];
  map[py][px] = 0;
  result += dist;

  babyShark.exp += 1;
  babyShark.levelUp();
}

console.log(result);
