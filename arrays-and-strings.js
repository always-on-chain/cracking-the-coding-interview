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

//1.2 Check Permutation: Given two strings, write a method to decide if one is a permuation of the other

const checkPermutation = (str1, str2) => {
  // str1 = str1.split('').sort().join('');
  // str2 = str2.split('').sort().join('');

  // for (var i = 0; i < str1.length; i++) {
  //   if (str1[i] !== str2[i]) return false;
  // }

  // return true;
  if (str1.length !== str2.length) return false;

  let letters = {};

  for (var i = 0; i < str1.length; i++) {
    letters[str1[i]] = letters[str1[i]] + 1 || 1;
  }

  for (var i = 0; i < str2.length; i++) {
    letters[str2[i]] = letters[str2[i]] - 1;
    if (letters[str2[i]] < 0) return false;
  }

  
  return true;
}

checkPermutation('hello', 'ollehd');

//1.3: URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
  //has sufficient space at the end to hold the additional characters, and that you are given the "true"
  //length of the string.

const URLify = (url, count) => {
  url = url.slice(0, count);
  let newURL = '';

  for (var i = 0; i < url.length; i++) {
    if (url[i] === ' ') {
      newURL += '%20';
    } else {
      newURL += url[i]
    }
  }

  return newURL;
}

URLify('Mr John Smith        ', 13);

