// 6. Check for Palindrome:
// Write a function that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards), otherwise returns false.

function palindrome(string) {
  const arrayValues = string.split("");
  const reversearrayValues = arrayValues.reverse();
  const reverseString = reversearrayValues.join("");

  if (string == reverseString) {
    console.log("it is a palindrome");
  } else {
    console.log("it is not a palindrome");
  }
}

palindrome("ana");
