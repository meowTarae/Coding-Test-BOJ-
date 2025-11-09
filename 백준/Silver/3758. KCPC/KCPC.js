let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const [n, k, t, m] = input.shift().split(" ").map(Number);
  const entry = input.splice(0, m);
  const score = Array(n)
    .fill(0)
    .map((_) => Array(k).fill(0));
  const count = Array(n).fill(0);
  const index = Array(n).fill(0);
  let lastIndex = 1;

  for (const data of entry) {
    const [id, j, s] = data.split(" ").map(Number);

    score[id - 1][j - 1] = score[id - 1][j - 1] > s ? score[id - 1][j - 1] : s;
    count[id - 1] += 1;
    index[id - 1] = lastIndex;
    lastIndex++;
  }

  const sum = score.map((arr) => arr.reduce((a, b) => a + b));
  const teams = [];
  for (let i = 0; i < n; i++) {
    teams.push({
      id: i + 1,
      totalScore: sum[i],
      submissionCount: count[i],
      lastSubmissionTime: index[i],
    });
  }
  teams.sort((a, b) => {
    if (a.totalScore !== b.totalScore) {
      return b.totalScore - a.totalScore;
    }

    if (a.submissionCount !== b.submissionCount) {
      return a.submissionCount - b.submissionCount;
    }

    return a.lastSubmissionTime - b.lastSubmissionTime;
  });

  console.log(teams.findIndex((team) => team.id === t) + 1);
}
