let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(+input % 2 === 0 ? 'SK' : 'CY');
