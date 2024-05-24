const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const words = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let count = 0;
for (const word of words) {
  const regex = word;

  while (input.indexOf(regex) !== -1) {
    input = input.replace(regex, " ");
    count += 1;
  }
}

console.log(count + input.length - [...input].filter((v) => v === " ").length);