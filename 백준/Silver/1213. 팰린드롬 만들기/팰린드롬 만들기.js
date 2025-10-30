let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const name = input[0];
const arr = Array(26).fill(0);

const countingSpelling = () => {
  for (let i = 0; i < name.length; i++) {
    const spelling = name[i];

    arr[spelling.charCodeAt() - 65] += 1;
  }
};

const sol = () => {
  const str = [];
  let odd = "";

  for (let i = 0; i < arr.length; i++) {
    const count = arr[i];
    const alphabet = String.fromCharCode(i + 65);

    if (count === 0) continue;
    if (count % 2 === 1) {
      odd += alphabet;
    }

    const n = Math.floor(count / 2);
    Array(n)
      .fill()
      .forEach((_) => str.push(alphabet));
  }

  const string = str.join("");
  const reverseString = str.reverse().join("");

  if (!odd) {
    console.log(string + reverseString);
  } else if (odd.length === 1) {
    console.log(string + odd + reverseString);
  } else {
    console.log(`I'm Sorry Hansoo`);
  }
};

countingSpelling();
sol();
