let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const students = +input[1];
const recommendStudent = input[2].split(" ").map(Number);
const arr = [];

const checkStudentExist = (recommendPerson) => {
  return arr.some((v) => v[0] === recommendPerson);
};

for (let i = 0; i < students; i++) {
  const picture = [recommendStudent[i], 1, i + 1];

  if (checkStudentExist(picture[0])) {
    arr.map((v) => v[0] === picture[0] && (v[1] += 1));
    continue;
  }

  if (arr.length < N) {
    arr.push(picture);
    continue;
  }

  let indexToRemove = 0;
  let minRec = arr[0][1];
  let minTime = arr[0][2];

  for (let j = 1; j < arr.length; j++) {
    const currentRec = arr[j][1];
    const currentTime = arr[j][2];

    if (currentRec < minRec) {
      minRec = currentRec;
      minTime = currentTime;
      indexToRemove = j;
    } else if (currentRec === minRec && currentTime < minTime) {
      minTime = currentTime;
      indexToRemove = j;
    }
  }

  arr[indexToRemove] = picture;
}

const result = arr.map((v) => v[0]).sort((a, b) => a - b);

console.log(result.join(" "));