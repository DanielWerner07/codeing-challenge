// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.



function longestCommonPrefix(strings) {
    if (strings.length === 0) {
        return "";
    }

    strings.sort();
    const firstStr = strings[0];
    const lastStr = strings[strings.length - 1];
    let commonPrefix = "";
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr.charAt(i) === lastStr.charAt(i)) {
            commonPrefix += firstStr.charAt(i);
        } else {
            break;
        }
    }

    return commonPrefix;
}

str1 = ["flower","flow","flight"]
console.log(longestCommonPrefix(str1));