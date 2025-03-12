const solution = (N, road, K) => {
  const graph = Array(N + 1)
    .fill(0)
    .map((_) => []);

  for (const [from, to, val] of road) {
    graph[from].push([to, val]);
    graph[to].push([from, val]);
  }

  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;

  const queue = [[0, 1]];
  while (queue.length) {
    const [curDist, cur] = queue.shift();

    if (curDist > dist[cur]) continue;

    for (const [next, cost] of graph[cur]) {
      if (dist[next] > curDist + cost) {
        dist[next] = curDist + cost;
        queue.push([curDist + cost, next]);
      }
    }
  }

  return dist.filter((v) => v <= K).length;
};


