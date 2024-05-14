let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(data) {
    this.heap.push(data);
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 1) {
      let parentIndex = Math.floor(currentIndex / 2);
      if (this.heap[currentIndex][1] < this.heap[parentIndex][1]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.heap.length <= 1) return null;
    const min = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let currentIndex = 1;
    let leftIndex, rightIndex, smallerIndex;

    while (true) {
      leftIndex = 2 * currentIndex;
      rightIndex = 2 * currentIndex + 1;
      smallerIndex = currentIndex;

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex][1] < this.heap[smallerIndex][1]
      ) {
        smallerIndex = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex][1] < this.heap[smallerIndex][1]
      ) {
        smallerIndex = rightIndex;
      }
      if (smallerIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[smallerIndex]] = [
          this.heap[smallerIndex],
          this.heap[currentIndex],
        ];
        currentIndex = smallerIndex;
      } else {
        break;
      }
    }
    return min;
  }
}

const [V, E] = input.shift().split(" ").map(Number);
const start = +input.shift();
const graph = Array(V + 1)
  .fill()
  .map(() => []);
const distance = Array(V + 1).fill(Infinity);
distance[0] = null;
const visited = Array(V + 1).fill(false);
const heap = new MinHeap();

input.forEach((line) => {
  const [u, v, w] = line.split(" ").map(Number);
  graph[u].push([v, w]);
});

distance[start] = 0;
heap.push([start, 0]);

while (heap.heap.length > 1) {
  const [node] = heap.pop();

  if (visited[node]) continue;
  visited[node] = true;

  graph[node].forEach(([nextNode, weight]) => {
    if (!visited[nextNode] && distance[nextNode] > distance[node] + weight) {
      distance[nextNode] = distance[node] + weight;
      heap.push([nextNode, distance[nextNode]]);
    }
  });
}

console.log(
  distance
    .slice(1)
    .map((dist) => (dist === Infinity ? "INF" : dist))
    .join("\n")
);