let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

const set = [...new Set(input)];

const dictionarySort = (a, b, length) => {
  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      return a.charCodeAt(i) - b.charCodeAt(i);
    }
  }
};

console.log(
  set
    .sort((a, b) => {
      if (a.length === b.length) {
        return dictionarySort(a, b, a.length);
      }

      return a.length - b.length;
    })
    .join("\n")
);
