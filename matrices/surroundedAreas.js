/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[row].length ||
      board[row][col] === 'Visited' ||
      board[row][col] === 'X'
    ) {
      return;
    }

    board[row][col] = 'Visited';
    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row - 1, col);
    dfs(row, col - 1);

    return;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (
        board[row][col] === 'O' &&
        (row === 0 ||
          col === 0 ||
          row === board.length - 1 ||
          col === board[0].length - 1)
      ) {
        dfs(row, col);
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'Visited') {
        board[row][col] = 'O';
      } else {
        board[row][col] = 'X';
      }
    }
  }
};
