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