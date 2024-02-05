// Given an array of numbers, find the maximum sum of any contiguous subarray of the array.
// For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.
// Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

function maxSubarraySum(array) {
    if (array.length === 0) {
      return 0;
    }
  
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
  
    for (let i = 1; i < array.length; i++) {
      maxEndingHere = Math.max(array[i], maxEndingHere + array[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  
    return Math.max(0, maxSoFar);
  }
  
  // Example usage:
  const example1 = [34, -50, 42, 14, -5, 86];
  console.log(maxSubarraySum(example1)); // Output: 137
  
  const example2 = [-5, -1, -8, -9];
  console.log(maxSubarraySum(example2)); // Output: 0