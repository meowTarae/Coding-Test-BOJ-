let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const regexp = /[a-zA-Z-]+/g;

let longestWord = "";
let longestLength = 0;

for (const line of input) {
  const matches = line.match(regexp);

  if (matches) {
    for (const word of matches) {
      if (word === "E-N-D") break;

      if (word.length > longestLength) {
        longestWord = word;
        longestLength = word.length;
      }
    }
  }
}

console.log(longestWord.toLowerCase());