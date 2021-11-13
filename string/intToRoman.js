/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let storage = [
      ['IX', 'V', 'IV', 'I'],
      ['XC', 'L', 'XL', 'X'],
      ['CM', 'D', 'CD', 'C'],
      ['M', 'M', 'M', 'M'],
  ];
  // roman numerals are greatest to smallest
  // set up ans str
  let ans = '';
  // convert number to string and split string to get tens places
  // eg num = 3944 => 3, 9, 4, 4 => 3 1000's, 9 100's, 4 10's, 4 1's
  let nSplit = [...(num + '')];
  // length 4 = 1000s
  // length 3 = 100s
  // length 2 = 10s
  // length 1 = 1s
    let tensPlaces = nSplit.length;
  // look through nums arr for roman values to append to ans str
  for (let i = 0; i < nSplit.length; i++) {
    let currChar = Number(nSplit[i]);
    // determines how many roman chars to append for that tens digit
    // if (tensPlaces === 4) {
    //   ans += storage[tensPlaces - 1].repeat(currChar);
    // } else {
    //   if (currChar === 9) {
    //     ans += storage[tensPlaces - 1][0];
    //   } else if (currChar >= 5) {
    //     ans += storage[tensPlaces - 1][1];
    //     ans += storage[tensPlaces - 1][3].repeat(currChar - 5);
    //   } else {
    //     if (currChar === 4) {
    //       ans += storage[tensPlaces - 1][2];
    //     } else {
    //       ans += storage[tensPlaces - 1][3].repeat(currChar);
    //     }
    //   }
    // }
    if (currChar === 9) {
      ans += storage[tensPlaces - 1][0];
    } else if (currChar >= 5) {
      ans += storage[tensPlaces - 1][1];
      ans += storage[tensPlaces - 1][3].repeat(currChar - 5);
    } else {
      if (currChar === 4) {
        ans += storage[tensPlaces - 1][2];
      } else {
        ans += storage[tensPlaces - 1][3].repeat(currChar);
      }
    }
    tensPlaces--;
    // console.log(`ans: ${ans}`);
    // decrement tens place after finishing while loop
    // tensPlaces--;
  }
  return ans;
};

console.log(intToRoman(58));
