// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

function addTwoNumbers (l1, l2) {
    reversed1 = l1.reverse();
    reversed2 = l2.reverse();
    string1 = parseInt(reversed1.join(''), 10);
    string2 = parseInt(reversed2.join(''), 10)
    return (string1 + string2);
};

a1 = [2,4,3];
a2 = [5,6,4];
console.log(addTwoNumbers(a1, a2));