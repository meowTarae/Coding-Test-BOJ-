let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  print() {
    console.log(this.heap);
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);

    let index = this.size();
    let parent = Math.floor(index / 2);

    while (index > 1 && this.heap[parent] > this.heap[index]) {
      this.swap(parent, index);
      index = parent;
      parent = Math.floor(index / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) return 0; // 힙이 비어있을 경우 0을 반환
    if (this.heap.length === 2) return this.heap.pop(); // 하나만 남았을 경우 그 값을 반환

    const min = this.heap[1]; // 루트 요소(최소값) 저장
    this.heap[1] = this.heap.pop(); // 마지막 요소를 루트 위치로 이동

    let index = 1;
    while (true) {
      let leftIndex = 2 * index;
      let rightIndex = 2 * index + 1;
      let smallest = index;

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] < this.heap[smallest]
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[smallest]
      ) {
        smallest = rightIndex;
      }
      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }

    return min;
  }
}

const minHeap = new MinHeap();
const result = [];

for (const iterator of input) {
  if (iterator === 0) {
    const num = minHeap.pop();
    num ? result.push(num) : result.push(0);
    continue;
  }

  minHeap.push(iterator);
}

console.log(result.join("\n"));
