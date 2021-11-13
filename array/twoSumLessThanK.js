/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var twoSumLessThanK = function(nums, k) {
    let sum = -1;
  
  for (let i = 0; i < nums.length; i ++) {
    for (let j = i + 1; j < nums.length; j ++) {
      let temp = nums[i] + nums[j];
      if (temp < k && temp > sum) {
        sum = temp;
      }
    }
  }
  return sum;
};