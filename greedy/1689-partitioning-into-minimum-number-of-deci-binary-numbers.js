// ## 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
//
// A decimal number is called deci-binary if each of its digits is either 0 or 1 (no leading zeros).
// Given a string `n` representing a positive decimal integer,
// return the **minimum number of positive deci-binary numbers** needed so that they sum up to `n`.
//
// 🔗 https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
//
// 🧠 **Algorithm:** Greedy
// 🟡 **Difficulty:** Medium
// 📄 **Explanation**: The largest digit in the string determines the minimum number of deci-binary numbers needed.
// Each deci-binary number can contribute at most 1 per digit, so we need at least `maxDigit` such numbers.
//
// **Approach**:
// Iterate through the digits of the string `n`, and track the maximum digit.
// Since 9 is the highest possible, we can stop early when we find it.
//
// **Time Complexity**: O(n)
// **Space Complexity**: O(1)
//
// **Why it’s interesting**:
// Elegant greedy insight based on number representation, not arithmetic operations.

const minPartitions = function(n) {
    let max = 0;

    for (let char of n) {
        if (+char > max) max = +char;
        if (max === 9) break;
    }

    return max;
};
