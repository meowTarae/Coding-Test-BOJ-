let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class AbsHeap {
  constructor() {
    this.heap = [null];
  }

  push(array) {
    this.heap.push(array);

    let curIdx = this.heap.length - 1;
    while (curIdx > 1) {
      const parIdx = ~~(curIdx / 2);

      if (this.heap[parIdx][1] < this.heap[curIdx][1]) break;
      if (
        this.heap[parIdx][1] === this.heap[curIdx][1] &&
        !(this.heap[parIdx][0] === 0 && this.heap[curIdx][0] === 1)
      )
        break;

      [this.heap[parIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parIdx],
      ];

      curIdx = parIdx;
    }
  }

  pop() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) {
      const arr = this.heap.pop();

      return arr[0] === 0 ? arr[1] : -arr[1];
    }

    const min = this.heap[1];
    this.heap[1] = this.heap.pop();

    const isExist = (idx, heapLen) => {
      return idx < heapLen;
    };

    let curIdx = 1;
    while (1) {
      const leftIdx = curIdx * 2;
      const rightIdx = curIdx * 2 + 1;
      let smallest = curIdx;

      if (
        isExist(leftIdx, this.heap.length) &&
        (this.heap[curIdx][1] > this.heap[leftIdx][1] ||
          (this.heap[curIdx][1] === this.heap[leftIdx][1] &&
            this.heap[curIdx][0] === 0 &&
            this.heap[leftIdx][0] === 1))
      ) {
        smallest = leftIdx;
      }

      if (
        isExist(rightIdx, this.heap.length) &&
        (this.heap[smallest][1] > this.heap[rightIdx][1] ||
          (this.heap[smallest][1] === this.heap[rightIdx][1] &&
            this.heap[smallest][0] === 0 &&
            this.heap[rightIdx][0] === 1))
      ) {
        smallest = rightIdx;
      }

      if (smallest === curIdx) break;

      [this.heap[curIdx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[curIdx],
      ];

      curIdx = smallest;
    }

    return min[0] === 0 ? min[1] : -min[1];
  }
}

input.shift();
const result = [];
const absHeap = new AbsHeap();

for (const num of input) {
  if (+num === 0) {
    result.push(absHeap.pop());
    continue;
  }

  absHeap.push(+num > 0 ? [0, +num] : [1, -num]);
}

console.log(result.join("\n"));
