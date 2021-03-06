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