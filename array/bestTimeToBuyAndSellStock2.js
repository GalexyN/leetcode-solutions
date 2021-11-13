/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let max = 0;
    let diff;
    
    for (let i = 1; i < prices.length; i ++) {
      diff = prices[i] - prices[i - 1];
      if (diff > 0) {
        max += diff;
      }
    }
    
    return max;
  };