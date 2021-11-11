/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    //difference between x and y
    var bitmask = 0;
    for (var num of nums) {
        bitmask ^= num;
    }
    
    //find the rightmost 1 in bitmask
    var diff = bitmask & (-bitmask);
    
    //divide x and y into two groups and find them individually
    var result = [];
    for (var num of nums) {
        if ((diff & num) === 0) result[0] ^= num;
        else result[1] ^= num;
    }
    return result;
};