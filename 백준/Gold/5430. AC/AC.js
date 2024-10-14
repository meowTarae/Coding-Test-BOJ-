let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [T, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const p = [];
const n = [];
const arr = [];

let count = 0;
for (let i = 0; i < rest.length; i++) {
  if (count === 0) {
    p.push(rest[i]);
  } else if (count === 1) {
    n.push(+rest[i]);
  } else {
    arr.push(
      rest[i] === "[]" ? [] : rest[i].slice(1, -1).split(",").map(Number)
    );
  }

  count = (count + 1) % 3;
}

const result = [];
for (let i = 0; i < T; i++) {
  const func = p[i];
  let reverseFlag = false;
  let isError = false;
  let start = 0;
  let end = arr[i].length;

  for (let j = 0; j < func.length; j++) {
    switch (func[j]) {
      case "R":
        reverseFlag = !reverseFlag;
        break;
      case "D":
        if (end <= start) {
          isError = true;
          break;
        }
        reverseFlag ? (end -= 1) : (start += 1);
        break;

      default:
        break;
    }
  }

  if (isError) {
    result.push("error");
    continue;
  }
  const res = reverseFlag
    ? arr[i].slice(start, end).reverse()
    : arr[i].slice(start, end);
  result.push(`[${res.join(",")}]`);
}

result.forEach((v) => console.log(v));
