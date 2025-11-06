let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [p, m] = input.shift().split(" ").map(Number);

const rooms = [];
const conditions = [];

for (const userInfo of input) {
  const [level, name] = userInfo.split(" ");

  let index = -1;
  for (let i = 0; i < rooms.length; i++) {
    if (index !== -1) continue;

    const [min, max, people] = conditions[i];

    if (people === m) continue;
    if (+level >= min && +level <= max) index = i;
  }

  if (index !== -1) {
    rooms[index].push(`${level} ${name}`);
    conditions[index][2] += 1;
  } else {
    rooms.push([`${level} ${name}`]);
    conditions.push([+level - 10, +level + 10, 1]);
  }
}

for (const room of rooms) {
  console.log(room.length === m ? "Started!" : "Waiting!");

  room.sort((a, b) => {
    const [, aName] = a.split(" ");
    const [, bName] = b.split(" ");

    return aName.localeCompare(bName);
  });
  room.forEach((v) => console.log(v));
}
