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
    // // without native reverse method
    // let left = 0;
    // let right = el.length - 1;
    // while (left < right) {
    //   [el[left], el[right]] = [el[right], el[left]]
    //   left++;
    //   right--;
    // }
    // with native reverse method
    el.reverse();
  }
  
  return matrix;
};