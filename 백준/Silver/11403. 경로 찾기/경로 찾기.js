let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = [];

for (const row of input) {
  arr.push(row.split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (arr[j][i] && arr[i][k]) {
        arr[j][k] = 1;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(arr[i].join(" "));
}