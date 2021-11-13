/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let storage = [];
    
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        storage.push('FizzBuzz');
        continue;
      }
      if (i % 3 === 0) {
        storage.push('Fizz');
        continue;
      }
      if (i % 5 === 0) {
        storage.push('Buzz')
        continue;
      }
      storage.push(i+'');
    }
    
    return storage;
  };