/**
 * @param {string} s
 * @return {string}
 input string
 output string
 constraints: preserve whitespace and initial word order
    - input string at least 1 word
    - no trailing spaces
  edge:
 */
  var reverseWords = function(s) {
    // create reverse string function
    const reverse = (str) => {
        // set up left and right pointers
        let left = 0;
        let right = str.length;
        let reversedString = str.split('');
        // loop while left < right
        while (left < right) {
            // switch position of left and right
            [reversedString[left], reversedString[right]] = [reversedString[right], reversedString[left]];
            // increment left
            left++;
            // decrement right  
            right--;
        }
        return reversedString.join('');
    }

    // split string by space
    let results = s.split(' ').map(el => reverse(el));
    // apply reverse helper function on each el
    // update el in arr with reversed el
    // return reverse sentence by joining new arr
    return results.join(' ');
};