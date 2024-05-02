let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +fs.readFileSync(filePath).toString().trim().split();
console.log(N%2===1 ? 'SK' : 'CY')