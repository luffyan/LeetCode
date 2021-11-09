/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var diff = x ^ y;
    var ans = 0;
    // console.log(diff);
    while(diff) {
        ans += diff & 1;
        diff >>= 1;
    }
    return ans;
};