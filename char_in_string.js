// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

function charInSting(char, string) {
    let number = 0;
    for (i in string) {
        if (string[i] == char) {
            number++;
        }
    }
    return number;
}

console.log(charInSting("a", "edabit"))
console.log(charInSting("c", "Chamber of secrets"))
console.log(charInSting("b", "big fat bubble"))