/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // set up char frequency map
    const charFreq = new Map();
    // loop through nums
    for (let el of nums) {
    // store char in map
      // if char not in map 
      if (!charFreq.get(el)) { 
        // add char = 1
        charFreq.set(el, 1)
      } else {
      // if char in map already this means theres 2 now
          // delete el
        charFreq.delete(el);
      }
    }
    // return map
    return charFreq.keys().next().value;
  };