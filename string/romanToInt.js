/*
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

I             1
V             5
X             10
L             50
C             100
D             500
M             1000


Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

input string type
output int type
constraints;
    s is at least length 1
*/

var romanToInt = function (s) {
  // store the values of each roman letter
  let storage = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;
  // loop through the input string
  for (let i = 0; i < s.length; i ++) {
      // check for special roman letter cases
        // do something
        // check the next index for a special roman character
        if (s[i] === 'I' && (s[ i + 1] === 'V' || s[i + 1] === 'X')) {
            // check if before v or x
            ans -= storage[s[i]];
        } else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
            ans -= storage[s[i]]
        } else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
            ans -= storage[s[i]]
        } else {
            ans += storage[s[i]];
        }

        console.log(`ans: ${ans}`);
    }
  // continue
  return ans;
};
