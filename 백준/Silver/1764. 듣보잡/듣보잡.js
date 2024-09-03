const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = num.split(" ").map(Number);
const setN = new Set();
const setM = new Set();
const result = [];

input.forEach((v, i) => (i <= N - 1 ? setN.add(input[i]) : setM.add(input[i])));
setN.forEach((v) => setM.has(v) && result.push(v));


console.log(result.length);
console.log(result.sort().join("\n"));
