const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [T, ...words] = fs.readFileSync(filePath).toString().trim().split("\n");

const 유사회문_검사 = (word, left, right) => {
  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
      continue;
    }

    return false;
  }

  return true;
};

const solution = (word) => {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
      continue;
    }

    if (
      유사회문_검사(word, left + 1, right) ||
      유사회문_검사(word, left, right - 1)
    )
      return 1;

    return 2;
  }

  return 0;
};

for (const word of words) {
  console.log(solution(word));
}
