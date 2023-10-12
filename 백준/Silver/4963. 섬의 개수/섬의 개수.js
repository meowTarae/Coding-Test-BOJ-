function initialize() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const [w, h] = input[i].split(" ").map(Number);
    if (w == 0 && h == 0) return;
    const map = [];

    for (let j = i + 1; j <= i + h; j++) {
      map.push(input[j].split(" ").map(Number));
    }

    calculate(map, w, h);

    count++;
    i += h;
  }
}

function calculate(map, w, h) {
  const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
  const dy = [0, 0, -1, 1, -1, 1, -1, 1];

  const visited = Array(h)
    .fill(0)
    .map((_) => [...Array(w).fill(0)]);

  const DFS = (x, y) => {
    if (visited[x][y]) return;
    visited[x][y] = 1;

    for (let i = 0; i < 8; i++) {
      const mx = x + dx[i];
      const my = y + dy[i];

      if (mx >= 0 && mx < h && my >= 0 && my < w) {
        if (map[mx][my] && !visited[mx][my]) {
          DFS(mx, my);
        }
      }
    }
  };

  let count = 0;
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (map[j][i] && !visited[j][i]) {
        count++;
        DFS(j, i);
      }
    }
  }
  console.log(count);
}
initialize();
