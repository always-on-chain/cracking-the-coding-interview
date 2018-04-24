//1.1 Is Unique: Implement an algorithm to determine if a string has all unique chars.
  //What if you cannot use additional data structures?

const isUnique = (string) => {
  let hashTable = {};

  //only 128 unique characters in the ASCII list
  if (string.length > 128) return false;

  for (var i = 0; i < string.length; i++) {
    hashTable[string[i]] = hashTable[string[i]] + 1 || 1;
    if (hashTable[string[i]] > 1) return false;
  }


  return true;
}

isUnique('hello'); //false
isUnique('abcde') //true

