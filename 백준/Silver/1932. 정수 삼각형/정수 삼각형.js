let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const map = rest.map((v) => v.split(" ").map(Number));

for (let i = 1; i < n; i++) {
  for (let j = 0; j < map[i].length; j++) {
    map[i][j] += Math.max(map[i - 1]?.[j - 1] || 0, map[i - 1][j] ?? 0);
  }
}

console.log(Math.max(...map[n - 1]));
