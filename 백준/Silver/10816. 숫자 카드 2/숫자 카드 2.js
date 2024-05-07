let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const searchStartIndex = (start, end, value, array) => {
  let index = -1;

  while (start <= end) {
    // const mid = ~~((end - start) / 2);
    const mid = start + Math.floor((end - start) / 2);
    const element = array[mid];

    if (element === value) {
      index = mid;
      end = mid - 1;
    } else if (element > value) {
      end = mid - 1;
    } else if (element < value) {
      start = mid + 1;
    }
  }

  return index;
};

const searchEndIndex = (start, end, value, array) => {
  let index = -1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const element = array[mid];

    if (element === value) {
      index = mid;
      start = mid + 1;
    } else if (element > value) {
      end = mid - 1;
    } else if (element < value) {
      start = mid + 1;
    }
  }

  return index;
};

const solution = () => {
  B.forEach((v, idx) => {
    const start = 0,
      end = +input[0] - 1;
    const startIndex = searchStartIndex(start, end, v, A);
    const EndIndex = searchEndIndex(start, end, v, A);
    let count = 0;

    if (startIndex === -1 || EndIndex === -1) count = 0;
    else count = EndIndex - startIndex + 1;

    result[idx] = count;
  });
};

const result = Array(+input[2]).fill(0);
const [A, B] = input
  .filter((_, idx) => idx % 2 === 1)
  .map((v) => v.split(" ").map(Number));

A.sort((a, b) => a - b);

solution();

console.log(...result);
