/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // [7, 2, 5, 9, 1, 6, 4]
    // min: 2, 1
    // maxProfit: 7, 5
//     var min = Number.MAX_VALUE;
//     var maxProfit = 0;
    
//     for(var i = 0; i < prices.length; i++) {
//         //find the smallest number in the array
//         if(prices[i] < min) {
//             min = prices[i];
//         } else if (prices[i] - min > maxProfit) {
//             maxProfit = prices[i] - min;
//         } 
//     }
//     return maxProfit;
    //iterate through the array, find and update current min, 
    //calculate current profit, and update max profit
    
    var min = prices[0];
    var max = 0;
    
    for(var i = 1; i < prices.length; i++) {
        
        max = Math.max(prices[i] - min, max);
        min = Math.min(min, prices[i]);
    }
    return max;
};