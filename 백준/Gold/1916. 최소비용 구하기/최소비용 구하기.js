const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.splice(0, 2).map(Number);
const graph = Array(N + 1)
  .fill()
  .map((_) => []);

for (let i = 0; i < M; i++) {
  const [from, to, value] = input[i].split(" ").map(Number);
  graph[from].push({ node: to, cost: value });
}

const [start, end] = input[M].split(" ").map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }
 
  insert(item) {
    this.heap.push(item);
    this.bubbleUp();
  }
 
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].cost <= this.heap[index].cost) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
 
  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }
 
  bubbleDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
 
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.cost < element.cost) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.cost < element.cost) ||
          (swap !== null && rightChild.cost < leftChild.cost)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
 
  isEmpty() {
    return this.heap.length === 0;
  }
}

const dijkstra = (start, end) => {
  const distances = Array(N + 1).fill(Infinity);
  distances[start] = 0;

  const heap = new MinHeap();
  heap.insert({ node: start, cost: 0 });

  while (!heap.isEmpty()) {
    const { node: current, cost: currentCost } = heap.extractMin();
    if (distances[current] < currentCost) continue;

    for (const { node: neighbor, cost: neighborCost } of graph[current]) {
      const newCost = currentCost + neighborCost;
      if (newCost < distances[neighbor]) {
        distances[neighbor] = newCost;
        heap.insert({ node: neighbor, cost: newCost });
      }
    }
  }

  return distances[end];
};

console.log(dijkstra(start, end));
