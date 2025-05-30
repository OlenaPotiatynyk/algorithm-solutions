// ## 121. Best Time to Buy and Sell Stock
//
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//
// 🔗 https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
//
// 🧠 **Algorithm:** Greedy
// 🟡 **Difficulty:** Easy
// 📄 **Explanation**: Track the minimum price seen so far and compute the best profit on the fly.
//
// **Approach**: Iterate over prices, keep track of the minimum price, and update bestProfit when a higher difference is found.
// **Time Complexity**: O(n) (single pass)
// **Space Complexity**: O(1) (constant space)
//
// **Why it’s interesting**: Simple yet elegant example of greedy optimization with a single scan and state tracking.

const maxProfit = function(prices) {
    let bestProfit = 0;
    let minPrice = prices[0];

    for (let i=1; i<prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        else if (prices[i] - minPrice > bestProfit) bestProfit = prices[i] - minPrice;
    }

    return bestProfit;
};
