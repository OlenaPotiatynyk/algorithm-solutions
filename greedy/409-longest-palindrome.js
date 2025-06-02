// ## 409. Longest Palindrome
//
// Given a string `s` which consists of lowercase or uppercase letters,
// return the length of the longest palindrome that can be built with those letters.
//
// Letters are case sensitive, e.g., "Aa" is not considered a palindrome pair.
//
// 🔗 https://leetcode.com/problems/longest-palindrome/
//
// 🧠 **Algorithm:** Greedy
// 🟡 **Difficulty:** Easy
// 📄 **Explanation**: Count pairs greedily as we iterate.
//                   If there are characters with odd count left, we can use one of them in the center.
//
// **Approach**:
// - Use a Map to track whether we've seen a letter once (odd).
// - Each time we see a pair (letter seen before), we count +2 to the result and remove the pair from map.
// - At the end, if there is at least one unmatched letter, we can put it in the middle (+1).
//
// **Time Complexity**: O(n)
// **Space Complexity**: O(1) (since only letters A-Z/a-z — bounded alphabet)
//
// **Why it’s interesting**: Elegant greedy pattern with character pairing logic.

const longestPalindrome = function(s) {
    if (s.length === 0) return 0;

    let longest = 0;
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) > 0) {
            map.set(s[i], 0);
            longest += 2;
        } else {
            map.set(s[i], 1);
        }
    }

    if ([...map.values()].some(val => val > 0)) longest++;

    return longest;
};
