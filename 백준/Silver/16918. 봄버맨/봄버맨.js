const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [R, C, N] = input[0].split(" ").map((el) => +el);
const map = Array.from({ length: R }, () => Array(C).fill(null));
const bombtime = Array.from({ length: R }, () => Array(C).fill(0));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let time = 1;

for (let i = 1; i <= R; i++) {
  const temp = input[i].split("");
  for (let j = 0; j < C; j++) {
    map[i - 1][j] = temp[j];
    if (temp[j] === "O") bombtime[i - 1][j] = 3;
  }
}

while (time <= N) {
  if (time % 2 === 0) {
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (map[i][j] === ".") {
          map[i][j] = "O";
          bombtime[i][j] = time + 3;
        }
      }
    }
  } else {
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (bombtime[i][j] === time) {
          map[i][j] = ".";

          for (let k = 0; k < 4; k++) {
            const nx = i + dir[k][0];
            const ny = j + dir[k][1];

            if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;

            if (map[nx][ny] === "O" && bombtime[nx][ny] !== time) {
              map[nx][ny] = ".";
              bombtime[nx][ny] = 0;
            }
          }
        }
      }
    }
  }

  time += 1;
}

let answer = "";
for (let i = 0; i < R; i++) {
  answer += map[i].join("");
  answer += "\n";
}

console.log(answer);