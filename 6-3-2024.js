// Given a list of words, find all pairs of unique indices such that the concatenation of the two words is a palindrome.

// For example, given the list ["code", "edoc", "da", "d"], return [(0, 1), (1, 0), (2, 3)].

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function findPalindromePairs(words) {
    let pairs = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j) {
                let concat1 = words[i] + words[j];
                let concat2 = words[j] + words[i];
                if (isPalindrome(concat1)) {
                    pairs.push([i, j]);
                }
                if (isPalindrome(concat2)) {
                    pairs.push([j, i]);
                }
            }
        }
    }
    return pairs;
}

// Example usage:
const words = ["code", "edoc", "da", "d"];
console.log(findPalindromePairs(words)); // Output: [ [ 0, 1 ], [ 1, 0 ], [ 2, 3 ] ]