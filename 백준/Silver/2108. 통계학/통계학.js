const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input.map(Number).sort((a, b) => a - b);

const 산술평균 = (arr) => {
  const 평균 = arr.reduce((a, b) => a + b, 0) / N;

  console.log(~~Math.round(평균));
};

const 중앙값 = (arr) => {
  console.log(arr[Math.floor(N / 2)]);
};

const 최빈값 = (arr) => {
  const 빈도수_객체 = {};

  for (const value of arr) {
    빈도수_객체[value] ? (빈도수_객체[value] += 1) : (빈도수_객체[value] = 1);
  }

  const entries = Object.entries(빈도수_객체);
  const 빈도수_객체_정렬 = entries.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  const 최빈값_배열 = [];
  const maxValue = 빈도수_객체_정렬[0][1];

  for (const [key, value] of 빈도수_객체_정렬) {
    if (value === maxValue) {
      최빈값_배열.push(+key);
    }
  }

  console.log(최빈값_배열.length === 1 ? 최빈값_배열[0] : 최빈값_배열[1]);
};

const 범위 = (arr) => {
  console.log(arr[N - 1] - arr[0]);
};

산술평균(arr);
중앙값(arr);
최빈값(arr);
범위(arr);
