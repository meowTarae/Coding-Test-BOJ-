let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.forEach((v) =>
  console.log(/^(100+1+|01)+$/.test(v) ? "SUBMARINE" : "NOISE")
);
