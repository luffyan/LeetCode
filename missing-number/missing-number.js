/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var missing;
    for(var i = 0; i < nums.length; i++) {
        missing ^= nums[i] ^ i;
    }
    return missing ^ (nums.length);
};