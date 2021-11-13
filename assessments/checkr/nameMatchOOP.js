/*
Name Matching

At Checkr, one of the most important aspects of our work is accurately matching records
to candidates. One of the ways that we do this is by comparing the name on a given record
to a list of known aliases for the candidate. In this exercise, we will implement a
`name_match` method that accepts the list of known aliases as well as the name returned
on a record. It should return True if the name matches any of the aliases and False otherwise.

The name_match method will be required to pass the following tests:

1. Exact match

known_aliases = ['Alphonse Gabriel Capone', 'Al Capone']
name_match(known_aliases, 'Alphonse Gabriel Capone') => True
name_match(known_aliases, 'Al Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => False


2. Middle name missing (on alias)

known_aliases = ['Alphonse Capone']
name_match(known_aliases, 'Alphonse Gabriel Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => True
name_match(known_aliases, 'Alexander Capone') => False


3. Middle name missing (on record name)

known_aliases = ['Alphonse Gabriel Capone']
name_match(known_aliases, 'Alphonse Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => False
name_match(known_aliases, 'Alexander Capone') => False


4. More middle name tests
These serve as a sanity check of your implementation of cases 2 and 3

known_aliases = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone']
name_match(known_aliases, 'Alphonse Gabriel Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => True
name_match(known_aliases, 'Alphonse Edward Capone') => False


5. Middle initial matches middle name

known_aliases = ['Alphonse Gabriel Capone', 'Alphonse F Capone']
name_match(known_aliases, 'Alphonse G Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => True
name_match(known_aliases, 'Alphonse E Capone') => False
name_match(known_aliases, 'Alphonse Edward Capone') => False
name_match(known_aliases, 'Alphonse Gregory Capone') => False


Bonus: Transposition

Transposition (swapping) of the first name and middle name is relatively common.
In order to accurately match the name returned from a record we should take this
into account.

All of the test cases implemented previously also apply to the transposed name.


6. First name and middle name can be transposed

'Gabriel Alphonse Capone' is a valid transposition of 'Alphonse Gabriel Capone'

known_aliases = ['Alphonse Gabriel Capone']
name_match(known_aliases, 'Gabriel Alphonse Capone') => True
name_match(known_aliases, 'Gabriel A Capone') => True
name_match(known_aliases, 'Gabriel Capone') => True
name_match(known_aliases, 'Gabriel Francis Capone') => False


7. Last name cannot be transposed

'Alphonse Capone Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
'Capone Alphonse Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'

known_aliases = ['Alphonse Gabriel Capone']
name_match(known_aliases, 'Alphonse Capone Gabriel') => False
name_match(known_aliases, 'Capone Alphonse Gabriel') => False
name_match(known_aliases, 'Capone Gabriel') => False
 */

class Name {
  constructor({ nameStructure, firstName, lastName, middleName }) {
    this.nameStructure = nameStructure;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.middleInitial = middleName[0];
  }

  fullFirstNameTest(name2) {
    return this.firstName === name2.firstName;
  }
  fullMiddleNameTest(name2) {
    return this.middleName === name2.middleName;
  }
  fullLastNameTest(name2) {
    return this.lastName === name2.lastName;
  }
  middleNameInitialTest(name2) {
    return this.middleInitial === name2.middleInitial;
  }

  middleInitialMatchesMiddleNameTest(name2) {
    if (this.fullFirstNameTest(name2)) {
      if (this.middleName.length !== name2.middleName.length) {
        return this.middleNameInitialTest(name2);
      } else {
        return this.fullMiddleNameTest(name2);
      }
    }
    return false;
  }
  transposeFirstAndMiddleNameTest(name2) {
    let transposedAliasName = new Name({
      nameStructure: this.nameStructure,
      firstName: this.middleName,
      middleName: this.firstName,
      lastName: this.lastName,
    });
    // console.log(transposedAliasName);
    // console.log(name2.fullFirstMiddleLastTest(transposedAliasName));
    return (
      name2.fullFirstMiddleLastTest(transposedAliasName) ||
      name2.middleInitialMatchesMiddleNameTest(transposedAliasName)
    );
  }
}
const splitName = (nameStr) => {
  let storage = {};

  let nameSplit = nameStr.split(' ');
  storage['nameStructure'] = nameSplit.length;
  storage['firstName'] = nameSplit[0];
  if (nameSplit.length === 2) {
    storage['lastName'] = nameSplit[1];
    storage['middleName'] = '';
  } else {
    storage['lastName'] = nameSplit[2];
    storage['middleName'] = nameSplit[1];
  }

  return storage;
};

const name_match = (namesArr, inputString) => {
  let inputName = new Name(splitName(inputString));

  if (namesArr.indexOf(inputString) > -1) {
    // takes care of full name exact matches
    return true;
  }
  for (let name of namesArr) {
    let aliasName = new Name(splitName(name));

    let lastNameMatch = aliasName.fullLastNameTest(inputName);
    let middleInitialAndNameMatch =
      aliasName.middleInitialMatchesMiddleNameTest(inputName);

    if (lastNameMatch && middleInitialAndNameMatch) {
      return true;
    }
  }

  return false;
};

const assertEquals = (input, expected) => {
  if (input === expected) {
    return 'passed';
  } else {
    return 'failed';
  }
};
// 1. Exact match

known_aliases = ['Alphonse Gabriel Capone', 'Al Capone'];
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Gabriel Capone'), true)
);
console.log(assertEquals(name_match(known_aliases, 'Al Capone'), true));
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Francis Capone'), false)
);
console.log('---');
// 2. Middle name missing (on alias)

known_aliases = ['Alphonse Capone'];
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Gabriel Capone'), true)
);
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Francis Capone'), true)
);
console.log(assertEquals(name_match(known_aliases, 'Alexander Capone'), false));
console.log('---');

// 3. Middle name missing (on record name)

known_aliases = ['Alphonse Gabriel Capone'];
console.log(assertEquals(name_match(known_aliases, 'Alphonse Capone'), true));
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Francis Capone'), false)
);
console.log(assertEquals(name_match(known_aliases, 'Alexander Capone'), false));
console.log('---');

// 4. More middle name tests
// These serve as a sanity check of your implementation of cases 2 and 3

known_aliases = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone'];
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Gabriel Capone'), true)
);
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Francis Capone'), true)
);
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Edward Capone'), false)
);
console.log('---');

// 5. Middle initial matches middle name

known_aliases = ['Alphonse Gabriel Capone', 'Alphonse F Capone'];
console.log(assertEquals(name_match(known_aliases, 'Alphonse G Capone'), true));
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Francis Capone'), true)
);
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse E Capone'), false)
);
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Edward Capone'), false)
);
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Gregory Capone'), false)
);
console.log('---');

// 6. First name and middle name can be transposed

// 'Gabriel Alphonse Capone' is a valid transposition of 'Alphonse Gabriel Capone'

known_aliases = ['Alphonse Gabriel Capone'];
console.log(
  assertEquals(name_match(known_aliases, 'Gabriel Alphonse Capone'), true)
);
console.log(assertEquals(name_match(known_aliases, 'Gabriel A Capone'), true));
console.log(assertEquals(name_match(known_aliases, 'Gabriel Capone'), true));
console.log(
  assertEquals(name_match(known_aliases, 'Gabriel Francis Capone'), false)
);
console.log('---');

// 7. Last name cannot be transposed

// 'Alphonse Capone Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
// 'Capone Alphonse Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'

known_aliases = ['Alphonse Gabriel Capone'];
console.log(
  assertEquals(name_match(known_aliases, 'Alphonse Capone Gabriel'), false)
);
console.log(
  assertEquals(name_match(known_aliases, 'Capone Alphonse Gabriel'), false)
);
console.log(assertEquals(name_match(known_aliases, 'Capone Gabriel'), false));
console.log('---');
