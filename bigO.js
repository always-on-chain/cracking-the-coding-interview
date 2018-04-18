//1:
const product = (a, b) => {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum;
}
//Answer: O(b)

//2: 
const power = (a, b) => {
  if (b < 0) {
    return 0; //error
  } else if (b === 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
}
//Answer: O(b)

//3:
const mod = (a, b) => {
  if (b <= 0) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}
//Answer: O(1)

//4: 
const div = (a, b) => {
  let count = 0; 
  let sum = b;
  while (sum <= a) {
    sum += b;
    count++;
  }
  return count;
}
//Answer: O(a/b)

//5: 
const sqrt = (n) => {
  return sqrt_helper(n, 1, n);
}

const sqrt_helper = (n, min, max) => {
  if (max < min) return -1;

  let guess = (min + max) / 2;

  if (guess * guess === n) { //found it!
    return guess;
  } else if (guess * guess < n) { //too low
    return sqrt_helper(n, guess + 1, max); //try higher
  } else {
    return sqrt_helper(n, min, guess - 1); //try lower
  }
}
//Answer: O(log n)

//6: 
const sqrt = (n) => {
  for (let guess = 1; guess * guess <= n; guess++) {
    if (guess * guess === n) {
      return guess;
    }
  }
  return -1;
}
//Answer: O(sqrt(n))

//7: If a binary search tree is not balanced, how long might it take (worst case) to find an element in it?
//Answer: O(n): n is the number of nodes in the tree. The max time to find an element is the 
  //depth of the tree

//8: You are looking for a specific value in a binary tree, but the tree is not a binary search tree.
  //What is the time complexity of this?
//Answer: O(n): without any ordering of the nodes, you will have to search through all nodes to find one

//10:
const sumDigits = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n /= 10;
  }
  return sum;
}
//Answer: O(log n)
