let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (const arr of input) {
  const [A, B] = arr.split(" ").map(Number);
  console.log(A + B);
}
