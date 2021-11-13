/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0,-1);
    let ans = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i ++) {
      count += nums[i] === 0 ? -1: 1;
      if (map.has(count)) {
        ans = Math.max(ans, i - map.get(count))
      } else {
        map.set(count, i)
      }
    }
    
    return ans;
  };