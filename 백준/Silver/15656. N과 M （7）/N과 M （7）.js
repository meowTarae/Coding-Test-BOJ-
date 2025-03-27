let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [input, rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.split(" ").map(Number);
const values = rest
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const arr = [];
let result = "";

const recursion = (num) => {
  if (num === M) {
    result += arr.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    arr.push(values[i]);
    recursion(num + 1);
    arr.pop();
  }
};

recursion(0);
console.log(result.slice(0, -1));
