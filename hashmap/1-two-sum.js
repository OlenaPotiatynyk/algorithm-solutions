// ## 1. Two Sum
//
// Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// 🔗 https://leetcode.com/problems/two-sum/
//
// 🧠 **Algorithm:** Hash Map / Greedy
// 🟡 **Difficulty:** Easy
// 📄 **Explanation**: While iterating, store each value’s index in a map. For each value, check if the complement (target - value) is already in the map.
//
// **Approach**:
// - Traverse the array once.
// - For each number, calculate its complement to reach `target`.
// - If the complement exists in the map, return the indices.
// - Otherwise, store the number and its index in the map.
//
// **Time Complexity**: O(n) — single pass over the array with constant-time map operations
// **Space Complexity**: O(n) — in worst case, the map holds all elements
//
// **Why it’s interesting**: A perfect example of trading space for time to achieve optimal performance.

const twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
        map.set(nums[i], i);
    }
};
