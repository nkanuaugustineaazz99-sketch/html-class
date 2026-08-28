// ===============================
// String Manipulation Functions
// ===============================

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// ===============================
// Array Functions
// ===============================

// Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

// Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array (example: filter out even numbers)
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

// ===============================
// Mathematical Functions
// ===============================

// Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Fibonacci Sequence
function fibonacci(numTerms) {
  const sequence = [0, 1];
  for (let i = 2; i < numTerms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, numTerms);
}

// ===============================
// Example Usage
// ===============================

console.log("=== String Functions ===");
console.log(reverseString("hello")); // ➞ "olleh"
console.log(countCharacters("hello")); // ➞ 5
console.log(capitalizeWords("hello world")); // ➞ "Hello World"

console.log("=== Array Functions ===");
console.log(findMax([1, 2, 3, 4, 5])); // ➞ 5
console.log(findMin([1, 2, 3, 4, 5])); // ➞ 1
console.log(sumArray([1, 2, 3, 4, 5])); // ➞ 15
console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 !== 0)); // ➞ [1, 3, 5]

console.log("=== Math Functions ===");
console.log(factorial(5)); // ➞ 120
console.log(isPrime(7));   // ➞ true
console.log(fibonacci(10)); // ➞ [0,1,1,2,3,5,8,13,21,34]
