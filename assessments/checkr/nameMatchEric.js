const generatePossibilities = (inputStr) => {
  let possibleNames = [];
  let inputFirst;
  let inputLast;
  let inputMiddle;

  let inputStringSplit = inputStr.split(' ');

  if (inputStringSplit.length === 2) {
    // no middle name
    inputFirst = inputStringSplit[0];
    inputLast = inputStringSplit[1];
  } else {
    inputFirst = inputStringSplit[0];
    inputLast = inputStringSplit[2];
    inputMiddle = inputStringSplit[1];
  }

  // first last
  possibleNames.push(inputFirst + ' ' + inputLast);
  if (inputMiddle) {
    // first middle last
    possibleNames.push(inputFirst + ' ' + inputMiddle + ' ' + inputLast);
    // first middle initial last
    possibleNames.push(inputFirst + ' ' + inputMiddle[0] + ' ' + inputLast);
    // middle first last
    possibleNames.push(inputMiddle + ' ' + inputFirst + ' ' + inputLast);
  }
  return possibleNames;
};
const name_match = (knownAliasesArr, inputNameStr) => {
  let possibleAliasNames = knownAliasesArr.map(el => generatePossibilities(el)).flat();

  console.log('possible alias: ', possibleAliasNames);
  return possibleAliasNames.indexOf(inputNameStr) > -1 ? true : false;
};

// 1. Exact match

known_aliases = ['Alphonse Gabriel Capone', 'Al Capone'];
console.log(name_match(known_aliases, 'Alphonse Gabriel Capone') + ' True');
console.log(name_match(known_aliases, 'Al Capone') + ' True');
console.log(name_match(known_aliases, 'Alphonse Francis Capone') + ' False');
console.log('---');
// 2. Middle name missing (on alias)

known_aliases = ['Alphonse Capone'];
console.log(name_match(known_aliases, 'Alphonse Gabriel Capone') + ' True');
console.log(name_match(known_aliases, 'Alphonse Francis Capone') + ' True');
console.log(name_match(known_aliases, 'Alexander Capone') + ' False');
console.log('---');

// // 3. Middle name missing (on record name)

// known_aliases = ['Alphonse Gabriel Capone'];
// console.log(name_match(known_aliases, 'Alphonse Capone') + ' True');
// console.log(name_match(known_aliases, 'Alphonse Francis Capone') + ' False');
// console.log(name_match(known_aliases, 'Alexander Capone') + ' False');
// console.log('---');

// // 4. More middle name tests
// // These serve as a sanity check of your implementation of cases 2 and 3

// known_aliases = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone'];
// console.log(name_match(known_aliases, 'Alphonse Gabriel Capone'), ' True');
// console.log(name_match(known_aliases, 'Alphonse Francis Capone'), ' True');
// console.log(name_match(known_aliases, 'Alphonse Edward Capone'), ' False');
// console.log('---');

// // 5. Middle initial matches middle name

// known_aliases = ['Alphonse Gabriel Capone', 'Alphonse F Capone'];
// console.log(name_match(known_aliases, 'Alphonse G Capone'), ' True');
// console.log(name_match(known_aliases, 'Alphonse Francis Capone'), ' True');
// console.log(name_match(known_aliases, 'Alphonse E Capone'), ' False');
// console.log(name_match(known_aliases, 'Alphonse Edward Capone'), ' False');
// console.log(name_match(known_aliases, 'Alphonse Gregory Capone'), ' False');
// console.log('---')

// // 6. First name and middle name can be transposed

// // 'Gabriel Alphonse Capone' is a valid transposition of 'Alphonse Gabriel Capone'

// known_aliases = ['Alphonse Gabriel Capone'];
// console.log(name_match(known_aliases, 'Gabriel Alphonse Capone'), 'True');
// console.log(name_match(known_aliases, 'Gabriel A Capone'), 'True');
// console.log(name_match(known_aliases, 'Gabriel Capone'), 'True');
// console.log(name_match(known_aliases, 'Gabriel Francis Capone'), 'False');
// console.log('---');

// // 7. Last name cannot be transposed

// // 'Alphonse Capone Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
// // 'Capone Alphonse Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'

// known_aliases = ['Alphonse Gabriel Capone'];
// console.log(name_match(known_aliases, 'Alphonse Capone Gabriel'), 'False');
// console.log(name_match(known_aliases, 'Capone Alphonse Gabriel'), 'False');
// console.log(name_match(known_aliases, 'Capone Gabriel'), 'False');
// console.log('---');
