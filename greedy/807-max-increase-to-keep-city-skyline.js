// ## 807. Max Increase to Keep City Skyline
//
// You are given an n x n integer grid representing the heights of buildings in a city,
// where grid[r][c] is the height of the building located at row r and column c.
//
// You are allowed to increase the height of any building any number of times.
// Return the maximum total sum that the height of the buildings can be increased
// without changing the city's skyline from any cardinal direction.
//
// 🔗 https://leetcode.com/problems/max-increase-to-keep-city-skyline/
//
// 🧠 **Algorithm:** Greedy
// 🟡 **Difficulty:** Medium
// 📄 **Explanation**: The height of each building can be increased up to the
// minimum of its row max and column max without affecting the skyline.
//
// **Approach**:
// 1. For each row, compute the maximum height.
// 2. For each column, compute the maximum height.
// 3. For each cell, add the difference between the allowed max and the current height.
//
// **Time Complexity**: O(n^2)
// **Space Complexity**: O(n) (for rowMax and colMax)
//
// **Why it’s interesting**: Combines grid manipulation with a greedy constraint-based optimization.
// It demonstrates how local maxima (per row/column) can define global constraints.

const maxIncreaseKeepingSkyline = function(grid) {
    const n = grid.length;
    const rowMax = grid.map(row => Math.max(...row));
    const colMax = Array.from({ length: n }, (_, c) =>
        Math.max(...grid.map(row => row[c]))
    );

    let result = 0;
    for (let r = 0; r < n; ++r) {
        for (let c = 0; c < n; ++c) {
            result += Math.min(rowMax[r], colMax[c]) - grid[r][c];
        }
    }

    return result;
};
