/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n, dp =[]) {
    // base cases
      if (n === 1) {
          return 1;
      }
      if (n === 2) {
          return 2;
      }
    // checks if we've already done this calculation before
    // if so return the el
      if (dp[n]) {
          return dp[n];
      }
    // if not we use recursion to break down n until we get to an n value we've already found
      let ans = climbStairs(n-1, dp) + climbStairs(n-2, dp);
    // we then update our dp with the new value weve found
      dp[n] = ans;
      return ans;
  
  };