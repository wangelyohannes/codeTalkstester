let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function largestNumber(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestNumber(arr));
