let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
input.forEach((v) => console.log(/^(100+1+|01)+$/.test(v) ? "YES" : "NO"));
