let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let curIdx = this.heap.length - 1;
    while (curIdx > 1) {
      const parIdx = Math.floor(curIdx / 2);

      if (this.heap[curIdx] < this.heap[parIdx]) break;

      [this.heap[curIdx], this.heap[parIdx]] = [
        this.heap[parIdx],
        this.heap[curIdx],
      ];

      curIdx = parIdx;
    }
  }

  pop() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    const max = this.heap[1];
    this.heap[1] = this.heap.pop();

    let curIdx = 1;

    while (1) {
      const leftIdx = curIdx * 2;
      const rightIdx = curIdx * 2 + 1;
      let biggest = curIdx;

      if (leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[curIdx])
        biggest = leftIdx;
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] > this.heap[biggest]
      )
        biggest = rightIdx;
      if (curIdx === biggest) break;

      [this.heap[curIdx], this.heap[biggest]] = [
        this.heap[biggest],
        this.heap[curIdx],
      ];
      curIdx = biggest;
    }

    return max;
  }
}

input.shift();

const maxHeap = new MaxHeap();
const results = [];

for (const num of input) {
  if (num === "0") {
    results.push(maxHeap.pop());
  } else {
    maxHeap.push(+num);
  }
}

console.log(results.join("\n"));
