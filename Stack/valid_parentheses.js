// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(string) {
    let bracketCount = 0;
    let curlyBracketCount = 0;
    let squareBracketCount = 0;
    for (i in string) {
        if (string[i] == "(") {
            bracketCount++;
            if (curlyBracketCount > 0 || squareBracketCount > 0) {return false}
        } else if (string[i] == ")") {
            bracketCount--;
        }
        if (string[i] == "{") {
            curlyBracketCount++;
            if (bracketCount > 0 || squareBracketCount > 0) {return false}
        } else if (string[i] == "}") {
            curlyBracketCount--;
        }
        if (string[i] == "[") {
            squareBracketCount++;
            if (bracketCount > 0 || curlyBracketCount > 0) {return false}
        } else if (string[i] == "]") {
            squareBracketCount--;
        }
        if (bracketCount < 0 || curlyBracketCount < 0 || squareBracketCount < 0) {
            return false
        }
    }
    if (bracketCount > 0 || curlyBracketCount > 0 || squareBracketCount > 0) {
        return false
    } else {
        return true
    }
}


console.log(isValid("()")) //expect true
console.log(isValid("()[]{}")) //expect true
console.log(isValid("(]")) //expect false
console.log(isValid("([)]")) //expect false
console.log(isValid("{[]}")) //expect true