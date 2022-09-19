// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

function detectWord(string) {
    let chars = [];
    for (i in string) {
        if (string[i] == string[i].toLowerCase()) {
            chars.push(string[i]);
        }
    }
    let word = chars.join('');
    return word;
}

console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); 