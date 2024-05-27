// Given a string, return the first recurring character in it, or null if there is no recurring character.

// For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

function firstRecurringCharacter(str) {
    const seenChars = new Set();
    
    for (let char of str) {
        if (seenChars.has(char)) {
            return char;
        }
        seenChars.add(char);
    }
    
    return null;
}

console.log(firstRecurringCharacter("acbbac")); // Output: "b"
console.log(firstRecurringCharacter("abcdef")); // Output: null