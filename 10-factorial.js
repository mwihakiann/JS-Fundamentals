// Get the first argument and convert to integer
const n = parseInt(process.argv[2]);

// Recursive function to compute factorial
function factorial(num) {
  if (isNaN(num) || num <= 0) {
    return 1; // factorial of NaN or 0 is 1
  }
  return num * factorial(num - 1);
}

// Print the factorial
console.log(factorial(n));
