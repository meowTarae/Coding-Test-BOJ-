let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...commands] = fs.readFileSync(filePath).toString().trim().split("\n");

class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }

  push(X) {
    this.array.push(X);
    this.length += 1;
  }

  pop() {
    if (!this.length) return -1;

    this.length -= 1;
    return this.array.pop();
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length ? 0 : 1;
  }

  top() {
    if (!this.length) return -1;

    return this.array[this.length - 1];
  }
}

const stack = new Stack();
const result = [];

for (const command of commands) {
  switch (command) {
    case "pop":
      result.push(stack.pop());
      break;
    case "size":
      result.push(stack.size());
      break;
    case "empty":
      result.push(stack.empty());
      break;
    case "top":
      result.push(stack.top());
      break;
    default:
      const [_, num] = command.split(" ");

      stack.push(+num);
      break;
  }
}

console.log(result.join("\n"));
