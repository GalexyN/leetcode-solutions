/**
 * @param {number} x
 * @return {number}
 */

 var reverseString = function (s) {
    let left = 0; // first index
    let right = s.length - 1; // last index
    // loop through the input array
    while (left < right) {
      // swap the chars at the current index and the last index
      [s[left], s[right]] = [s[right], s[left]];
      // continue the loop while moving the current index + 1 and last index - 1;
      left++;
      right--;
    }
  };
  
  var reverse = function(x) {
    let strNum;
    let strNumArr;
    
        // add a flag to check for negative number input
    // if negative
    let inputNumIsNeg = x < 0 ? true : false;
    // if positive number
    if (inputNumIsNeg) {
      strNum = x * -1 + ''; // turn into positive
      strNumArr = [...strNum];
    } else {
      // change input number to string
      strNum = x + '';
      strNumArr = [...strNum];
      // convert the stringed number into array
      // pass the string number arr to our reverseString function
      // join the array
      // convert back to number
      // return the reversed number
    }
    reverseString(strNumArr);
    let res = inputNumIsNeg ? Number(strNumArr.join('') * -1) : Number(strNumArr.join(''));
    
    
    return  res > (2 ** 31) || res < (-1 * (2 ** 31)) ? 0 : res;
  };
  
function foo (x) {
  return function () {
    x++;
    console.log(x);
  }
}  

const a = (function() {
  return parseInt('1.5');
})();

console.log('hello'.toUpperCase())