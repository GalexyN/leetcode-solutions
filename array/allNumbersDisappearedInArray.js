/**
 * @param {number[]} nums
 * @return {number[]}
 
 input array of ints
 output arr of ints
 constraints:
  nums is at least length 1
 edge:
  
  translation:
    input array nums, length n, has only values in range 1,n
    ask is to return an array of all the numbers missing in input
    array from range 1,n
  
  notes:
    there can be duplicates
    nums is not sorted
    
 */
    var findDisappearedNumbers = function(nums) {
        const res = Array.from({length: nums.length}, (_, i) => i + 1)
        
        for (let el of nums) {
          res[el - 1] = 0;
        }
        
        return res.filter(el => el)
      };