// ## 1282. Group the People Given the Group Size They Belong To
//
// There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.
// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in.
// Return a list of groups such that each person i is in a group of size groupSizes[i].
// Each person should appear in exactly one group, and every person must be in a group.
// If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.
// 🔗 https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
//
// 🧠 **Algorithm:** Greedy + Hash Map (grouping by size)
// 🟡 **Difficulty:** Medium
// 📄 **Explanation**: Collect people into temporary arrays by group size.
// When the array reaches the needed size, move it to result.
//
// **Approach**: Use a dictionary to group people by required size, flush to result when group is full.
// **Time Complexity**: O(n)
// **Space Complexity**: O(n)
//
// **Why it’s interesting**: Classic case of dynamic group assembly with greedy flush logic.

var groupThePeople = function(groupSizes) {
    const result = [];
    const map = {};

    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];

        if (!map[size]) map[size] = [];
        map[size].push(i);

        if (map[size].length === size) {
            result.push([...map[size]]);
            map[size] = [];
        }
    }

    return result;
};
