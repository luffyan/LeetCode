/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // right shift, count number of 1s
    if (n === 0) return false;
    var count = 0;
    while(n !== 0) {
        
        if(n & 1)
            count++;
        if(count > 1)
            return false;
        n = n >> 1;
    }
    return true;
};