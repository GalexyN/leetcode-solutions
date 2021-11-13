// console.log('hi')
// test case 'nlaebolko'
/*
Given a string text, 
you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. 
Return the maximum number of instances that can be formed.

'bballoon'

input string type
output int type
constraints : can only use each character once
edge: no empty strings, text length at least 1

trnaslation: how many times can we spell balloon using only each character once

ensure string is at least 7 chars long
loop through the the input string 
and store each character in a hashmap to keep count of all the letters in the string
set up count for letters in balloon b: 1 a: 1 l: 2 o: 2 n:1
loop through balloon storage and decrement from hash map count
    // if we make it all the way through the balloon storage we can increase balloon count by 1
    // if any chars in the hash map becomes < 0 we can return balloon count immediately
*/

const maxNumberOfBalloons = (text) => {
    if (text.length < 7) {
        return 0;
    }

    let maxNumberCount = text.split('b').length - 1;
    let charsInBalloon = ['b', 'a', 'l', 'o', 'n'];
    let charsInText = {};

    for (let char of text) {
        if (!charsInText[char]) {
            charsInText[char] = 1;
        } else {
            charsInText[char]++;
        }
    }

    for (let char of charsInBalloon) {
        if (!text.includes(char)) {
            return 0;
        } else {
            if (char === 'l' || char === 'o') {
                maxNumberCount = Math.min(maxNumberCount, Math.floor((charsInText[char] / 2)));
            } else {
                maxNumberCount = Math.min(maxNumberCount, charsInText[char]);
            }
        }
    }

    return maxNumberCount;
}

console.log(maxNumberOfBalloons("loonbalxballpoonballoo"));