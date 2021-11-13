/**
 * @param {number} n
 * @return {number}
  input
    int
  output
    int
  constraints
    n > 0
  edge
    
  translation
    we can only take 1 step or 2 steps. return the maximum amount of
    distinct ways we can climb the stairs
  
  eg
    n = 4 fib = 5
      1 + 1 + 1 + 1
      1 + 1 + 2
      1 + 2 + 1
      2 + 1 + 1
      2 + 2
    
    n = 5 fib = 8
      1 + 1 + 1 + 1 + 1
      1 + 1 + 1 + 2
      1 + 1 + 2 + 1
      1 + 2 + 1 + 1
      2 + 1 + 1 + 1
      2 + 2 + 1
      2 + 1 + 2
      1 + 2 + 2
 */
      var climbStairs = function(n) {
        // set up fib storage
        let fibs = [1, 2, 3];
        // set up base cases
          // n = 1 fib = 1
        if (n === 1) {
          return fibs[0];
        }
          // n = 2 fib = 2
        if (n === 2) {
          return fibs[1];
        }
          // n = 3 fib = 3
        if (n === 3) {
          return fibs[2];
        }
        // when n > 3 fib number is (n - 1) + (n - 2)
        let i = 3;
        // loop through n numbers
        while (i <= n) {   
          // push (n-1) + (n-2) to fib arr
          fibs.push(fibs[i - 1] + fibs[i - 2]);
          i++;
        }
        // return last index of fib arr
        return fibs[n - 1];
      };