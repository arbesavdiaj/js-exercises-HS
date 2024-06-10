// 3. Reverse a String:
// Write a function that takes a string as a parameter and returns the reverse of that string.

function revString(name) {
  return name.split("").reverse().join("");
}

console.log(revString("hello"));

// without using built-in functions

function revString(name) {
  newName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    newName += name[i];
  }
  return newName;
}

console.log(revString("hello"));
