let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const len = input.length;
const reverse = input.split("").reverse().join("");

for (let i = len; i >= 0; i--) {
  if ((input + reverse.substring(i, len)).endsWith(reverse)) {  
    console.log(len * 2 - i);
    break;
  }
}