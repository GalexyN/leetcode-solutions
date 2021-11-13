/**
 * @param {number[]} nums
 * @return {number}
 input array of distinct ints
 output int missing from range 0,n
 constraints: 
  els in input arr is in range 0,n
  has at least one el
  n is at least 1
 edge:
 
 translation:
  given an array, length n, filled with numbers from 0,n range 
  return the missing number from the range

notes:
  input arr not sorted  
  try: O(1) space and O(n) time
 */
// O(n + m) time O(1) space
// var missingNumber = function(nums) {
//   // 0 1 2 3 4 5 6 7 9 = 37
//   // if n = 9 sum should be 9! = 45
//   // missing digit is 45 - 37 = 8
  
//   // find sum of input arr
//   let inputSum = nums.reduce((a,b) => a + b);
//   // find sum of 0,n
//   let rangeSum = 0;
//   let i = 0;
//   // sums the range
//   while (i <= nums.length) {
//     rangeSum += i;
//     i++
//   }
//   // return difference
//   return rangeSum - inputSum;
// };

/*
O(n) time O(1) space
explanation:
  the input arr contains unique numbers only from 0,n range missing ONLY 1      number
  eg 
    n = 5 the input arr WITHOUT missing a number should be
    [0, 1, 2, 3, 4, 5]
    
  the max sum of n = 5 is the factorial of N or 5 in this case
  factorial equation = N * (N + 1) / 2 === 5 * (5 + 1) / 2 = 15
  
  if we're missing only 1 number then we know the difference between the max
  sum and our input arr is the digit we're missing
  
  eg
    n = 5 
    nums = [0, 1, 2, 3, 5] // missing 4
    maxSum = { 5 * (5 + 1) / 2 } = 15
    numsSum = 0 + 1 + 2 + 3 + 5 = 11
    missingNumber = maxSum - numsSum = 15 - 11 = 4
*/
var missingNumber = function(nums) {
  // create variable to store maxSum of 0,n range
  let maxSum = nums.length * (nums.length + 1) / 2; // O(1) space
  // return maxSum - numsSum
  return maxSum - nums.reduce((a, b) => a + b); // O(n) time since we looped
    // we find numsSum by reducing / summing all els in nums
};


