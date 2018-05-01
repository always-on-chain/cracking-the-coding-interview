function LinkedList() {

  let Node = function(element) {
    this.element = element;
    this.next = null;
  }

  this.length = 0;
  this.head = null;

  this.append = (element) => {
    let node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  this.removeAt = (position) => {
    //checking for out of bounds values
    let current;
    let previous;
    let index;

    if (position > -1 && position < this.length) {
      current = this.head;
      index = 0;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  this.insert = (position, element) => {

    if (position >= 0 && position <= this.length) {
      let node = new Node(element);
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true; 
    } else {
      return false;
    }
  }
}

//2.1 Write code to remove duplicates from an unsorted linked list
const removeDups = (list) => {
  let elements = [];

  if (list.head) {
    let current = list.head;
    let index = 0;

    while (current) {
      if (elements.includes(current.element)) {
        list.removeAt(index);
      } else {
        elements.push(current.element);
      }
      current = current.next;
      index++;
    }
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(3);

removeDups(list); // 1 -> 2 -> 3

//2.5 Sum Lists: You have two numbers represented by a linked list, where each node
  //contains a single digit. The digits are stored in reverse order, such that the
  //1's digit is at the head of the list. Write a function that adds the two numbers
  //and returns the sum as a linked list.

const reverseNum = (elements) => {
  let reversed = '';

  for (var i = elements.length - 1; i >= 0; i--) {
    reversed += elements[i];
  }

  return Number(reversed);
}

const getElements = (list) => {
  let elements = [];

  if (list.head) {
    let current = list.head;
    while (current) {
      elements.push(current.element);
      current = current.next;
    }
  }

  return elements;
}

const sumLists = (num1, num2) => {
  let reversedNum1 = reverseNum(getElements(num1));
  let reversedNum2 = reverseNum(getElements(num2));
  let stringSum = (reversedNum1 + reversedNum2).toString();
  let sumList = new LinkedList();

  console.log(stringSum, typeof stringSum);

  for (var i = stringSum.length - 1; i >= 0; i--) {
    sumList.append(Number(stringSum[i]));
  }

  return sumList;
}

let numberOne = new LinkedList();
numberOne.append(7);
numberOne.append(1);
numberOne.append(6);

let numberTwo = new LinkedList();
numberTwo.append(5);
numberTwo.append(9);
numberTwo.append(2);

let sumList = sumLists(numberOne, numberTwo); // 2 -> 1 -> 9

//2.6 Palindrome: Implement a function to check if a linked list is a palindrome
const checkIfPalindrome = (list) => {
  let elements = [];
  let reversed = '';

  if (list.head) {
    let current = list.head;
    while (current) {
      elements.push(current.element);
      current = current.next;
    }
  }

  for (var i = elements.length - 1; i >= 0; i--) {
    reversed += elements[i];
  }

  return reversed === elements.join('');
}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('a');

checkIfPalindrome(list); //true



