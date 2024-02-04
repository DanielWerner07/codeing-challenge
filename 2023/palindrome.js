// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function palindrome(int) {
    let str = int.toString();
    let reverseStr = str.split("").reverse().join("");
    if (str == reverseStr) {
        return true
    }   else {
        return false
    }
}

example1 = 121;
console.log(palindrome(example1));

example2 = -121;
console.log(palindrome(example2));

example3 = 10;
console.log(palindrome(example3));