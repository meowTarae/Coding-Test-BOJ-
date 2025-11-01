let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
if (a < b) {
  console.log("<");
} else if (a > b) {
  console.log(">");
} else {
  console.log("==");
}
