let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const pattern = input.shift().split("*");
const result = ["DA", "NE"];

for (const v of input) {
  const a = v.startsWith(pattern[0]),
    b = v.endsWith(pattern[1]);

  console.log(
    a && b && v.length >= pattern[0].length + pattern[1].length
      ? result[0]
      : result[1]
  );
}