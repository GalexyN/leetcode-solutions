/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
  
    for (let el of letters) {
      if (el > target ) {
        return el;
      }
    }
    return letters[0];
  };

const nextGreatestLetter2 = (letters, target) => {
    return letters.find(el => el > target);
}
