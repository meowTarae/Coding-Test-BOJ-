let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const sol = () => {
  let spot = 0;
  let result = "";
  const queue = [];

  for (let i = 1; i <= n; i++) {
    queue.push(i);
    result += "+";

    while (+input[spot] === queue.at(-1)) {
      queue.pop();
      result += "-";
      spot += 1;
    }
  }

  +n === spot ? result.split("").map((v) => console.log(v)) : console.log("NO");
};
sol();
