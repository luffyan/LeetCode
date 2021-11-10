/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var dp = [];
    dp[0] = 0;
    for (var i = 1; i <= n; i++) {
        dp[i] = i & 1 ? dp[i-1] + 1 : dp[i>>1];
    }
    return dp;
};