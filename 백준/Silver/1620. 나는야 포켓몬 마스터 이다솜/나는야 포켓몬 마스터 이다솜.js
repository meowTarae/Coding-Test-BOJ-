let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const map = {};
for (let i = 1; i <= N; i++) {
  map[input[i]] = i;
}

for (let i = N + 1; i <= N + M; i++) {
  console.log(+input[i] ? input[+input[i]] : map[input[i]]);
}
