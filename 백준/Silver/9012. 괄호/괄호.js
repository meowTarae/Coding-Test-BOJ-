let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const checkResult = (charArray) => {
  const stack = [];

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === "(") {
      stack.push(1);
      continue;
    }

    if (!stack.length) return false;

    stack.pop();
  }

  return !stack.length;
};

for (const str of input) {
  const charArray = [...str];
  const result = checkResult(charArray);

  console.log(result ? "YES" : "NO");
}
