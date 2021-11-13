/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  debugger
    let n = matrix.length
    let depth = n / 2;
    
    for (let i = 0; i < depth; i ++) {
      let length = n - 2 * i - 1;
      let opp = n - i - 1;
      
      for (let j = 0; j < length; j ++) {
        [
          matrix[i][i + j],
          matrix[opp - j][i],
          matrix[opp][opp -j],
          matrix[i + j][opp]
        ] = [
          matrix[opp - j][i],
          matrix[opp][opp - j],
          matrix[i + j][opp],
          matrix[i][i + j]
        ]
      }
    }
    
    return matrix;
  };

let input = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(input);