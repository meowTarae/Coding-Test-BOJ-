const solution = (cards1, cards2, goal) => {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] !== cards1[0] && goal[i] !== cards2[0]) return "No";

    goal[i] === cards1[0] ? cards1.shift() : cards2.shift();
  }

  return "Yes";
};