// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0

function CountNegativeNumber(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let e  = 0; e < grid[i].length; e++) {
            if (grid[i][e] < 0) {
                count++;
            }
        }
    }
    return count;
}

let grid1 = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
console.log(CountNegativeNumber(grid1));
let grid2 = [[3,2],[1,0]];
console.log(CountNegativeNumber(grid2));