const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = num.split(" ").map(Number);

const obj = {};
for (let i = 0; i < N; i++) {
  const [address, password] = input[i].split(" ");
  obj[address] = password;
}

for (let i = N; i < M + N; i++) {
  const key = input[i];
  console.log(obj[key]);
}
