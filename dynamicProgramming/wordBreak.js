/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let storage = Array(s.length + 1).fill(false);
    let hashMap = new Set(wordDict);
    
    storage[0] = true;
    
    for (let j = 1; j < storage.length; j ++) {
      for (let i = 0; i < j; i ++) {
        if (hashMap.has(s.slice(i, j)) && storage[i]) {
          storage[j] = true;
          break;
        } 
      }
    }
    return storage[storage.length - 1];
  };