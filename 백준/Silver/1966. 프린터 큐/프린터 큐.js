const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

const 정렬_프린터큐 = (arr, I) => {
  const result = [];

  while (arr.length) {
    let max_priority = Math.max(...arr.map((v) => v.p));
    const cur = arr.shift();

    if (cur.p === max_priority) {
      result.push(cur.i);

      if (cur.i === I) return result.length;
    } else {
      arr.push(cur);
    }
  }
};

const solution = () => {
  const [_, I] = input.shift().split(" ").map(Number);
  const arr = input.shift().split(" ").map(Number);
  const map = arr.map((v, i) => {
    return {
      p: v,
      i,
    };
  });

  console.log(정렬_프린터큐(map, I));
};

for (let i = 0; i < N; i++) {
  solution();
}