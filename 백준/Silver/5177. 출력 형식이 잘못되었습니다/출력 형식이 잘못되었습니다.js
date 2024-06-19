let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

const normalize = (str) => {
  str = str.toLowerCase();

  str = str.replace(/\s+/g, " ").trim();

  str = str.replace(/\s*([(){}\[\].,;:])\s*/g, "");

  str = str.replace(/[({\[]/g, "(").replace(/[)}\]]/g, ")");

  str = str.replace(/[;,]/g, ",");

  return str;
};

for (let i = 0; i < N; i++) {
  const s1 = input[i * 2];
  const s2 = input[i * 2 + 1];

  const nomS1 = normalize(s1);
  const nomS2 = normalize(s2);

  console.log(`Data Set ${i + 1}: ${nomS1 === nomS2 ? "equal" : "not equal"}`);

  if (N - 1 === i) break;
  console.log();
}
