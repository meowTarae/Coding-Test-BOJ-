const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const obj = {};

for (const file of input) {
  const extension = file.slice(file.indexOf(".") + 1);

  extension in obj ? (obj[extension] += 1) : (obj[extension] = 1);
}

const sortedKeys = Object.keys(obj).sort();

sortedKeys.forEach((key) => {
  console.log(`${key} ${obj[key]}`);
});
