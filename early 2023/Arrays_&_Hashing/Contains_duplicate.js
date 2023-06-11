// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums) {
    let duplicateFound = false;
    for (i in nums) {
        for (let e = +i + 1; e < nums.length; e++) {
            if (nums[i] == nums[e]) {
                duplicateFound = true;
            }
        }
    }
    return duplicateFound;
};
number1 = [1,2,3,4];
number2 = [1,2,3,1];
number3 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(number1)); //false
console.log(containsDuplicate(number2)); //true
console.log(containsDuplicate(number3)); //true