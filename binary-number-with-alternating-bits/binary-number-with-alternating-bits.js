/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var bits = n.toString(2);
    for (var i = 0; i < bits.length-1; i++) {
        if (bits[i] === bits[i+1]) return false;
    }
    return true;
};