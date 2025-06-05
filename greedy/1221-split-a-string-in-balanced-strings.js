// ## 1221. Split a String in Balanced Strings
//
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string `s`, split it into the maximum amount of balanced strings.
//
// 🔗 https://leetcode.com/problems/split-a-string-in-balanced-strings/
//
// 🧠 **Algorithm:** Greedy
// 🟢 **Difficulty:** Easy
// 📄 **Explanation**: We greedily count the number of times the string becomes balanced as we iterate.
//
// **Approach**:
// Use a single `balance` counter:
// - Increment for 'L', decrement for 'R'.
// - Every time the balance returns to 0, we have a complete balanced substring.
//
// **Time Complexity**: O(n)
// **Space Complexity**: O(1)
//
// **Why it’s interesting**:
// A good example of greedy thinking with character counting using minimal state.

const balancedStringSplit = function(s) {
    let balance = 0;
    let counter = 0;

    for (let char of s) {
        balance += char === 'L' ? 1 : -1;
        if (balance === 0) counter++;
    }

    return counter;
};
