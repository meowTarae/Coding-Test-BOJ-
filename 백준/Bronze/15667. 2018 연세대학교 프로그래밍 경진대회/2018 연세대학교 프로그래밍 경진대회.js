const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +fs.readFileSync(filePath).toString().trim();

for (let i = 0; i <= 100; i++) {
  if (1 + i + i * i === N) {
    console.log(i);
    break;
  }
}
