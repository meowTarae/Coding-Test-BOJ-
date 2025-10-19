let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, w, L] = input[0].split(" ").map(Number);
const trucks = input[1].split(" ").map(Number);
let bridge = [];
let count = 1;
let totalWeight = 0;
let arrive = 0;

const addTruckW = () => {
  if (!bridge.length) return;

  bridge.map((v) => (v[1] += 1));
};
const checkTruckArrive = () => {
  if (!bridge.length) return;

  if (bridge[0][1] === w) {
    totalWeight -= bridge[0][0];
    bridge.shift();
    arrive += 1;
  }
};

let i = 0;
while (arrive !== N) {
  if (totalWeight + trucks[i] <= L) {
    bridge.push([trucks[i], 0]);
    totalWeight += trucks[i];
    i++;
  }

  addTruckW();
  checkTruckArrive();
  count++;
}

console.log(count);
