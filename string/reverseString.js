/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 input array of chars
 output array of chars
 constraints: all ascii characters are in input arr, changes made in place
    - no extra memory for space
 edge: input arr at least length 1
 */
var reverseString = function(s) {
    // set left and right pointer
    let left = 0;
    let right = s.length - 1;
    // loop through while left <= right
    while (left < right) {
        // switch left and right indexes
        [s[left], s[right]] = [s[right], s[left]];
        // increment left and decrement right
        left++;
        right--;
    }

};