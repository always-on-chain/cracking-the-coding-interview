
const getPerms = (s, b) => {
  let arrayS = s.split('');
  let sortedS = arrayS.sort().join('');
  let count = 0;

  for (var i = 0; i < b.length; i++) {
    //skip chars that are not included in s
    if (arrayS.includes(b[i])) {
      let chars = b.slice(i, i + s.length);
      if (chars.split('').sort().join('') === sortedS) {
        count++;
      }
    }
  }

  return count;
};

const test = () => {
  let s = 'abbc';
  let b = 'cbabadcbbabbcbabaabccbabc';
  let expected = 7;
  let result = getPerms(s, b);

  if (expected === result) {
    console.log('Passed!')
  } else {
    console.log('Failed: expected ' + expected + ' but got ' + result);
  }
}

test();

