/**
 * @param {number[]} nums
 * @return {number}
 
 input
  array of nums
 output
  int
 constraints
  nums has at least 1 element
  must be contiguous sum
 edge
  
 */
 var maxSubArray = function(nums) {
    const maxSumInArr = arr => {
    // base case
      // if only 1 el left return that el
      if (arr.length === 1) {
        return arr[0];
      }
      if (arr.length === 0) { 
      // if no el return -infnity
        return -Infinity;
      }
      
      let length = arr.length - 1;
      let mid = Math.floor(length / 2);
      // find sum of left side left,mid
      let leftSideArr = maxSumInArr(arr.slice(0, mid));
      let rightSideArr = maxSumInArr(arr.slice(mid + 1, length + 1))
      // find sum of right side mid,right
      
      let leftMax = 0;
      let rightMax = 0;
      
      for (let i = mid - 1, curr = 0; i >= 0; i --) {
        curr += arr[i];
        leftMax = Math.max(curr, leftMax);
      }
      
      for (let i = mid + 1, curr = 0; i <= length; i ++ ) {
        curr += arr[i];
        rightMax = Math.max(curr, rightMax);
      }
      
      // return max sum
      return Math.max(leftMax + arr[mid] + rightMax, leftSideArr, rightSideArr)
    }
      return maxSumInArr(nums);
  
  
  };