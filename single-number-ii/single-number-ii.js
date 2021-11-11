/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var seenOnce = 0, seenTwice = 0;
    
    for(var num of nums) {
        seenOnce = ~seenTwice & (seenOnce ^ num);
        seenTwice = ~seenOnce & (seenTwice ^ num);
    }
    return seenOnce;
};