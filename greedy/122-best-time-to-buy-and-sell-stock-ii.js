// ## 122. Best Time to Buy and Sell Stock II
//
// You are given an integer array prices where prices[i] is the price of a given stock on the i-th day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
// However, you can buy it and then immediately sell it on the same day.
//
// Return the maximum profit you can achieve.
//
// 🔗 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
//
// 🧠 **Algorithm:** Greedy
// 🟡 **Difficulty:** Medium
// 📄 **Explanation**: Greedily collect all profitable price differences between consecutive days.
//
// **Approach**: Loop through the array, and whenever prices[i+1] > prices[i], take the profit (prices[i+1] - prices[i]).
// **Time Complexity**: O(n) (single pass)
// **Space Complexity**: O(1) (no extra space)
//
// **Why it’s interesting**: Demonstrates a key greedy strategy — take every local gain instead of trying to time the global optimum.

const maxProfit = function(prices) {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            profit += prices[i + 1] - prices[i];
        }
    }

    return profit;
};
