// You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}. By the pigeonhole principle, 
// there must be a duplicate. Find it in linear time and space.


function findDuplicate(nums) {
    // Step 1: Initialize the tortoise and hare
    let tortoise = nums[0];
    let hare = nums[0];
    
    // Step 2: Find the intersection point of the two runners
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);
    
    // Step 3: Find the entrance to the cycle
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    
    // The point where they meet is the duplicate element
    return hare;
}

// Example usage:
const nums = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums));  // Output: 3