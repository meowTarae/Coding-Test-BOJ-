let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input[0];
let str = "";
for (let i = 0; i < num; i++) {
  str += "*";
  console.log(str);
}
