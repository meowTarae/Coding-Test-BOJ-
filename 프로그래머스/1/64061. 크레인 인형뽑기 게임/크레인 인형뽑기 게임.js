const solution = (board, moves) => {
  let result = 0;
  const stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const currentNumber = board[j][moves[i] - 1];
      if (!currentNumber) continue;

      currentNumber === stack.at(-1)
        ? (stack.pop(), (result += 2))
        : stack.push(currentNumber);

      board[j][moves[i] - 1] = 0;
      break;
    }
  }

  return result;
};