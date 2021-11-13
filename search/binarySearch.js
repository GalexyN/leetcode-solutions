/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l = 0;
    let r = nums.length;
    
    while (l < r) {
      let mid = Math.floor((r + l) / 2);
      if (nums[mid] === target) {
        return mid;
      } else {
        if (nums[mid] > target) {
          r = mid;
        } else {
          l = mid + 1;
        }
      }
    }
    return nums[l] === target ? l : -1;
  };