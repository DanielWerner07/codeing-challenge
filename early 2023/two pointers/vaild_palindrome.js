// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(string) {
    newString = string.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s/g, '').toLowerCase();
    reverseString = newString.split("").reverse().join("");
    if (newString == reverseString) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("test#L:(*&@   asd   a")); //expect false
console.log(isPalindrome("A man, a plan, a canal: Panama")); //expect ture 
console.log(isPalindrome("Marge, let's \"[went].\" I await {news} telegram.")); //expect true