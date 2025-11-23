const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let str = input[i].trim();

  if (str === "#") break;

  const count = str.match(/[aeiou]/gi);

  console.log(count ? count.length : 0);
}
