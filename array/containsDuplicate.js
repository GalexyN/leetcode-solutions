/**
 * @param {number[]} nums
 * @return {boolean}
 input array[int]
 output bool
 constraints input array has at least 1 el
 edge
 
 translation: return true or false if the given array of integers
 has at least 2 of the same values
 */
 var containsDuplicate = function(nums) {
    // create char freq map
    const charFreq = new Map();
      // loop through arr 
    for (let el of nums) { 
        // if map contains current char already
      if (charFreq.get(el)) { 
          // return true
        return true;
      }
      // add each el into the map
      charFreq.set(el, 1);
    }
      // return false if we can loop through the entire nums arr
      // because we didnt find any duplicates
    return false;
  };