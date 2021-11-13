/**
 * @param {number[]} prices
 * @return {number}
 
 input
  array of ints
 output
  int
 constraints
  input arr at least length 1
  els in input array at least 0$
 edge
 
 translation
  you're given an array of numbers find the max difference between
  in the array
  if you cant find a profit return 0
 */
  var maxProfit = function(prices) {
    // set up res var
    let res = 0;
    // set up pointer 
    let pointer = prices[0];
    // loop through nums
    for (let el of prices) { 
      // compare if (el + 1) - el > res
      if (pointer < el) { 
        // if greater update res
        res = Math.max(res, el - pointer)
      } else { 
        // else update to next el
        pointer = el;
      }
    }
    // return res
    return res;
  };