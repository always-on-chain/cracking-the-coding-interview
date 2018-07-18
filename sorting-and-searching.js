//10.1 Sorted Merge: You are given two sorted arrays, A and B, where A has a
  //large enough buffer to hold B. Write a method to merge B into A in sorted order

const sortedMerge = (A, B) => {
  let indexA = A.length - 1;
  let indexB = B.length - 1;
  let indexMerged = A.length + B.length - 1;

  while(indexB >= 0) {
    if (indexA >= 0 && A[indexA] > B[indexB]) {
      A[indexMerged] = A[indexA];
      indexA--;
    } else {
      A[indexMerged] = B[indexB];
      indexB--;
    }
    indexMerged--;
  }

  return A;
}

const assertEquals = () => {
  let test1 = sortedMerge([1, 4, 7, 12], [3, 5, 9])
  let result = [1, 3, 4, 5, 7, 9, 12];

  if (JSON.stringify(test1) === JSON.stringify(result)) {
    console.log('Passed test1');
  } else {
    console.log(`Failed test1: ${test1} does not equal ${result}`);
  }
}

assertEquals();
