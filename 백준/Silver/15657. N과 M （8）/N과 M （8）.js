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

const recursion = (prev, count) => {
  if (count === M) {
    result += arr.join(" ") + "\n";
    return;
  }

  for (let i = prev; i < N; i++) {
    arr.push(values[i]);
    recursion(i, count + 1);
    arr.pop();
  }
};

recursion(0, 0);
console.log(result.slice(0, -1));
