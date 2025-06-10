let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let store = input[0];
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (store === input[i]) continue;

  store = input[i];
  count++;
}

console.log(Math.ceil(count / 2));
