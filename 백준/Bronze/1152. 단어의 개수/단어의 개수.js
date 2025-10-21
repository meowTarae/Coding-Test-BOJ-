let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

if (!input[0].trim().length) console.log(0);
else console.log(input[0].split(" ").length);