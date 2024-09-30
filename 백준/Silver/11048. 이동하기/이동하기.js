let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const initializeMap = () => {
  const arr = [];

  for (const str of input) {
    arr.push(str.split(" ").map(Number));
  }

  return arr;
};

const solution = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let left = 0;
      let up = 0;
      let diag = 0;

      if (j - 1 >= 0) left = map[i][j - 1];
      if (i - 1 >= 0) up = map[i - 1][j];
      if (i - 1 >= 0 && j - 1 >= 0) diag = map[i - 1][j - 1];

      map[i][j] += Math.max(left, up, diag);
    }
  }
};

const map = initializeMap();
solution();

console.log(map[N - 1][M - 1]);
