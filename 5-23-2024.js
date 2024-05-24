// Given a positive integer n, find the smallest number of squared integers which sum to n.
// For example, given n = 13, return 2 since 13 = 32 + 22 = 9 + 4.
// Given n = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.


function numSquares(n) {
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[n];
}

console.log(numSquares(13)); // Output: 2
console.log(numSquares(27)); // Output: 3