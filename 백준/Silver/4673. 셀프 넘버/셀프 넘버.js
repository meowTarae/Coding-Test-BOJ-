const selfNum = Array(10001)
  .fill()
  .map((_, i) => i);

const getSelfNum = (num) => {
  return +[...(num + "")].reduce((a, b) => +a + +b) + num;
};

for (let i = 1; i <= 10000; i++) {
  selfNum[getSelfNum(i)] = false;
}

const result = selfNum.filter((v) => v);
console.log(result.slice(0).join("\n"));