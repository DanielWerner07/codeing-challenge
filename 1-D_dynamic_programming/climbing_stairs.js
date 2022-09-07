// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: stairs = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: stairs = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStairs(stairs) {
    let oneStep = 1;
    let twoStep = 1;
    for(let i = 2; i <= stairs; i++) {
        const temp = twoStep;
        twoStep = twoStep + oneStep;
        oneStep = temp;
    }
    return twoStep;
}

console.log(climbStairs(2)); //expect 2
console.log(climbStairs(3)); //expect 3
console.log(climbStairs(4)); //expect 5
console.log(climbStairs(5)); //expect 8