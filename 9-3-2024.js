// Given an array of integers out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted.
// For example, given [3, 7, 5, 6, 9], 
// you should return (1, 3).

function findUnsortedSubarrayBounds(arr) {
    if (arr.length === 0) {
        return [-1, -1];
    }

    let n = arr.length;
    let left = 0;
    let right = n - 1;

    // Step 1: Find the first out of order element from the left
    while (left < n - 1 && arr[left] <= arr[left + 1]) {
        left++;
    }

    // If the array is already sorted
    if (left === n - 1) {
        return [-1, -1];
    }

    // Step 2: Find the first out of order element from the right
    while (right > 0 && arr[right] >= arr[right - 1]) {
        right--;
    }

    // Step 3: Find the minimum and maximum in the identified window
    let subarrayMin = Math.min(...arr.slice(left, right + 1));
    let subarrayMax = Math.max(...arr.slice(left, right + 1));

    // Step 4: Expand the left bound to include any numbers greater than subarrayMin
    while (left > 0 && arr[left - 1] > subarrayMin) {
        left--;
    }

    // Step 5: Expand the right bound to include any numbers smaller than subarrayMax
    while (right < n - 1 && arr[right + 1] < subarrayMax) {
        right++;
    }

    return [left, right];
}

// Example Usage:
const arr = [3, 7, 5, 6, 9];
console.log(findUnsortedSubarrayBounds(arr)); // Output: [1, 3]

const arr2 = [1, 7, 5, 6, 9, 56];
console.log(findUnsortedSubarrayBounds(arr2)); // Output: [1, 3]