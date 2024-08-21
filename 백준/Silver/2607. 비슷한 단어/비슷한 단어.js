const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [_, ...words] = fs.readFileSync(filePath).toString().trim().split("\n");

const firstWord = words.shift();
let result = 0;

for (let word of words) {
  if (
    Math.abs(firstWord.length - word.length) > 1 ||
    Math.abs(new Set(firstWord).size - new Set(word).size) > 1
  )
    continue;

  for (const char of firstWord) word = word.replace(char, "");

  word.length <= 1 && result++;
}

console.log(result);