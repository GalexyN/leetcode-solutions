/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let storage = {
      number: nums[0],
      count: 1
    }
    
    for (let i = 1; i < nums.length; i ++) {
      if (nums[i] === storage.number) {
        storage.count++;
      } else {
        storage.count--;
        if (storage.count < 0) {
          storage.number = nums[i];
          storage.count = 1;
        }
      }
    }
    
    return storage.number;
  };