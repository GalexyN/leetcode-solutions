/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let p = right;
    
    let res =[];
    
    while (left <= right) {
      if (nums[left] ** 2 > nums[right] ** 2) {
        res[p--] = nums[left++] ** 2;
      } else {
        res[p--] = nums[right--] ** 2;
      }
    }
    
    return res;
  };