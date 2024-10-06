let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...words] = fs.readFileSync(filePath).toString().trim().split("\n");

let result = 0;

for (const word of words) {
  let prev = word[0];
  const storage = [prev];
  let flag = true;

  for (let i = 0; i < word.length; i++) {
    const cur = word[i];
    if (prev === cur) continue;

    if (!storage.includes(cur)) {
      prev = cur;
      storage.push(cur);
    } else {
      flag = false;
      break;
    }
  }

  flag && result++;
}

console.log(result);
