let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const reverse = input.split("").reverse().join("");
if (input.includes(reverse)) {
  console.log(reverse.length);
  return;
}

const len = input.length;
for (let i = len - 1; i >= 0; i--) {
  const r = reverse.substring(i, len);

  const compare = input + r;
  if (compare.includes(reverse)) {
    console.log(compare.length);
    return;
  }
}
