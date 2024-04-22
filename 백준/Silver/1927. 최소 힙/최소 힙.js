let fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
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
    
    let index = this.heap.length - 1;
    let parent = Math.floor(index / 2);

    while (index > 1 && this.heap[parent] > this.heap[index]) {
      this.swap(parent, index);
      index = parent;
      parent = Math.floor(index / 2);
    }
  }

  pop() {
    const min = this.heap[1];

    if (this.heap.length <= 2) {
      this.heap = [null];
    } else {
      this.heap[1] = this.heap.pop();
    }

    let index = 1;
    let leftChild = index * 2;
    let rightChild = index * 2 + 1;

    if (!this.heap[leftChild]) return min;
    if (!this.heap[rightChild]) {
      if (this.heap[leftChild] < this.heap[index]) {
        this.swap(leftChild, index);
      }
      return min;
    }
    while (
      this.heap[leftChild] < this.heap[index] ||
      this.heap[rightChild] < this.heap[index]
    ) {
      const min =
        this.heap[leftChild] > this.heap[rightChild] ? rightChild : leftChild;
      this.swap(min, index);
      index = min;
      leftChild = index * 2;
      rightChild = index * 2 + 1;
    }

    return min;
  }
}

const heap = new MinHeap();
let result = [];

for (let i = 0; i < n; i++) {
  const num = input[i];

  if (num > 0) {
    heap.push(num);
  } else {
    const min = heap.pop();
    min ? result.push(min) : result.push(0);
  }
}

console.log(result.join("\n"));
