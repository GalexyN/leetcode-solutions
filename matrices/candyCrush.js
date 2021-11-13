/**
 * @param {number[][]} board
 * @return {number[][]}
 */
 var candyCrush = function(board) {
    if (!board) {
      return board;
    }
    
    let done = true;
    
    for (let row = 0; row < board.length; row ++) {
      for (let col = 0; col + 2 < board[0].length; col ++) {
        let candy1 = Math.abs(board[row][col]);
        let candy2 = Math.abs(board[row][col + 1]);
        let candy3 = Math.abs(board[row][col + 2]);
        
        if (candy1 && candy1 === candy2 && candy2 === candy3) {
          board[row][col] = board[row][col + 1] = board[row][col + 2] = -candy1;
          done = false;
        }
      }
    }
    
    for (let col = 0; col < board[0].length; col ++) {
      for (let row = 0; row + 2< board.length; row ++) {
        let candy1 = Math.abs(board[row][col]);
        let candy2 = Math.abs(board[row + 1][col]);
        let candy3 = Math.abs(board[row + 2][col]);
  
        if (candy1 && candy1 === candy2 && candy2 === candy3) {
          board[row][col] = board[row + 1][col] = board[row + 2][col] = -candy1;
          done = false;
        }
      }
    }
    
    if (!done) {
      for (let col = 0; col < board[0].length; col ++) {
        let index = board.length - 1; // get to bottom
        for (let row = board.length - 1; row >= 0; row --) {
          if (board[row][col] > 0) {
            board[index][col] = board[row][col];
            index--;
          }
        }
        for (let row = index; row >= 0; row --) {
          board[row][col] = 0;
        }
      }
    }
  
    
    return done ? board : candyCrush(board);
    
  };