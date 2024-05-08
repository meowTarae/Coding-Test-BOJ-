let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [Meter, heights] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = Meter.split(" ").map(Number);
const inputArray = heights.split(" ").map(Number);

const max = Math.max(...inputArray);

let result = 0;
let low = 0;
let high = max;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let sum = inputArray.reduce((acc, height) => {
    return height > mid ? acc + (height - mid) : acc;
  }, 0);

  if (sum >= M) {
    result = mid; 
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);