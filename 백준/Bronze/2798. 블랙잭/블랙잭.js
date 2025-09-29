let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = NM.split(" ").map(Number);
const numbers = rest[0].split(" ").map(Number);

const arr = [];
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = numbers[i] + numbers[j] + numbers[k];
      if (sum > M) continue;

      arr.push(sum);
    }
  }
}

console.log(arr.sort((a, b) => b - a)[0]);
