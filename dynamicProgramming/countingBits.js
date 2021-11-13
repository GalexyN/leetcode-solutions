/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let arr = [0, 1, 1];
    // base cases
    if (n === 0) {
      return [0];
    }
    
    if (n === 1) {
      return [0, 1];
    }
    
    if (n === 2) {
      return [0, 1, 1];
    }
    
    let highestBit = 2;
    
    for (let i = 3; i <= n; i++) {
      let holder = 0;
      // if i is log2 then push 1 since i is a whole bit 2,4,8,16,32, etc
      if (Math.log2(i) % 1 === 0) {
        arr.push(1);
        // update highest whole bit
        highestBit = i;
      } else {
        // if i is even 
        if (i % 2 === 0) { 
          // increment holder by 1 since it has at least 1 whole highest bit
          holder++;
          if (Math.log2(i - highestBit) % 2 === 0) {
            // increment 1 more to holder since i - highest bit 
            // becomes another whole bit
            arr.push(++holder);
            // move to next iteration
            continue;
          } else {
            // increment holder by an already found bit value 
            // eg: i = 30
              // 30 - 16 (highest bit) = 14 => holder = 1
              // 14 / 2 = 7 => holder = holder + arr[7 (14/2)] => 1 + 3 => 4
            holder += arr[(i - highestBit) / 2];
            arr.push(holder);
            continue;
          }
        } else {
          // if i is odd
          // increment holder since it has at least 1 highest bit
          ++holder;
          // increment holder by a previously found odd bit
          // eg n = 29 or 1111 in binary
            // 29 - 16 (highest bit) = 13 // holder = 1 currently
            // 1 + arr[29 - 16 // 13] = 1 + 3 = 4
          holder += arr[i - highestBit];
          arr.push(holder);
          continue;
        }
      }
    }
    return arr;
  };