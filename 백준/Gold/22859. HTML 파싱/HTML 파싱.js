let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const getTitle = (str) => {
  let isTitle = false;
  let result = "";

  for (let x of str) {
    if (x !== '"' && isTitle) result += x;
    if (x === '"' && !isTitle) {
      isTitle = true;
    } else if (x === '"' && isTitle) {
      isTitle = false;
      break;
    }
  }

  return result;
};

const deleteTags = (p) => {
  let str = "";
  let prev = "";
  let isTag = false;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "<" && !isTag) {
      isTag = true;
      continue;
    } else if (p[i] === ">" && isTag) {
      isTag = false;
      continue;
    } else if (!isTag) {
      if (prev === " " && prev === p[i]) continue;
      str += p[i];
      prev = p[i];
    }
  }

  return str;
};

const answer = [];
const divTags = input.match(/<div(.*?)>(.*?)<\/div>/g);

for (let div of divTags) {
  const pTag = div.split(/<p(.*?)>(.*?)<\/p>/g);
  const title = getTitle(pTag[0]);
  const result = [];

  for (let i = 1; i < pTag.length - 1; i++) {
    let p = pTag[i].trim();
    if (!p.length) continue;
    p = deleteTags(p);
    result.push(p);
  }
  answer.push([`title : ${title}`, result.join("\n")]);
}

console.log(answer.map((v) => v.join("\n")).join("\n"));
