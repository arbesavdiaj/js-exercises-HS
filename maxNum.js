// 4. Find the Maximum Number in an Array:
// Write a function that takes an array of numbers as a parameter and returns the maximum number in the array.

function maxNum(arr) {
  let i;
  let max = arr[0];

  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) 
        max = arr[i];
  }
  return max;
}

let arr = [10, 324, 45, 90, 9808];
console.log(maxNum(arr));
