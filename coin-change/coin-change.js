/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount < 1) {
        return 0;
    }
    var count = new Array(amount);
    console.log(count);
    return coinChangeHelper(coins, amount, count);
    
};

// with memo, F(S) = F(S-1) + Ci;
var coinChangeHelper = function (coins, remain, count) {
    if(remain < 0) {
        return -1;
    }
    if(remain === 0) {
        return 0;
    }
    if(count[remain-1]) {
        return count[remain-1];
    }
    var min = Number.MAX_VALUE;
    for(var coin of coins) {
        var res = coinChangeHelper(coins, remain - coin, count);
        if(res >= 0 && res < min) {
            min = 1 + res;
        }
    }
    count[remain - 1] = (min === Number.MAX_VALUE) ? -1 : min;
    return count[remain - 1];
}