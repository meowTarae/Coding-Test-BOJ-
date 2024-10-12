let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [NM, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = NM.split(" ").map(Number);
const map = rest.map((v) => v.split(" ").map(Number));
const house = [];
const chicken = [];

map.forEach((v1, i1) =>
  v1.forEach((v2, i2) => {
    v2 === 1 && house.push([i1, i2]);
    v2 === 2 && chicken.push([i1, i2]);
  })
);

function generateCombinations(M, items) {
  const arr = [];
  const combination = [];

  function dfs(start, depth) {
    if (depth === M) {
      arr.push([...combination]);
      return;
    }
    for (let i = start; i < items; i++) {
      combination.push(i);
      dfs(i + 1, depth + 1);
      combination.pop();
    }
  }

  dfs(0, 0);
  return arr;
}

const combination = generateCombinations(M, chicken.length);

const combLength = [];
for (let i = 0; i < house.length; i++) {
  const arr = [];
  const [hy, hx] = house[i];

  for (let j = 0; j < combination.length; j++) {
    let minDistance = Infinity;

    for (let k = 0; k < combination[j].length; k++) {
      const chickenIndex = combination[j][k];
      const [cy, cx] = chicken[chickenIndex];
      const distance = Math.abs(hy - cy) + Math.abs(hx - cx);

      if (distance < minDistance) {
        minDistance = distance;
      }
    }

    arr.push(minDistance);
  }

  combLength.push(arr);
}

const result = [];
for (let i = 0; i < combLength[0].length; i++) {
  let sum = 0;

  for (let j = 0; j < combLength.length; j++) {
    sum += combLength[j][i];
  }
  result.push(sum);
}

console.log(Math.min(...result));
