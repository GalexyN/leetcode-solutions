/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  
    for (let i = 0; i < matrix.length; i ++) {
      for (let j = i; j < matrix[i].length; j ++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    
    for (let el of matrix) {
      el.reverse();
    }
    
    return matrix;
  };

  console.log([1,'a'].reduce((a,b) => a+b));