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

// Explanation:

//     Initialization:
//         Both tortoise and hare start from the first element of the array nums[0].

//     Finding the Intersection Point:
//         The tortoise moves one step at a time: tortoise = nums[tortoise].
//         The hare moves two steps at a time: hare = nums[nums[hare]].
//         They will eventually meet inside the cycle (caused by the duplicate) because the hare is moving faster.

//     Finding the Entrance to the Cycle:
//         Once the tortoise and hare meet, reset tortoise to the start of the array.
//         Move both pointers one step at a time until they meet again. The point where they meet is the entrance to the cycle, which corresponds to the duplicate element.

// This algorithm efficiently finds the duplicate in O(n)O(n) time and O(1)O(1) space, making it an optimal solution for the problem.