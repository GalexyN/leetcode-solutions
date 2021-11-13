/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let n = nums.length;
     nums = nums.sort((a,b) => a -b);
    // -4 -1 1 2
    let minDiff = Infinity;
    let minDiffSum = Infinity;
    
    for (let p1 = 0; p1 < n; p1++) {
      let p2 = p1 + 1;
      let p3 = n - 1;
      
      while (p2 < p3) {
        let tempSum = nums[p1] + nums[p2] + nums[p3];
        let diff = Math.abs(target - tempSum);
        
        if (diff < minDiff) {
          minDiff = diff;
          minDiffSum = tempSum;
        } else {
          if (tempSum < target) {
            p2++
          } else {
            p3--;
          }
        }
      }
    }
    
    return minDiffSum;
  };