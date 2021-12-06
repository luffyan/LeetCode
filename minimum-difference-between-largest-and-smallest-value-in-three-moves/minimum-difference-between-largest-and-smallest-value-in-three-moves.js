/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length < 5) {
        return 0;
    }
    
    //[1,5,0,10,14]
    nums.sort((a,b) => (a-b));
    
    //[0,1,5,10,14]
    //remove 0 1 5,     nums.length-1 - 3
    //remove 0 1 14,    nums.length-1-1 -2
    //remove 0 14, 10   nums.length-1-2 - 1
    //remove 14, 10, 5  nums.length-1-3 - 0
    
    var min = Number.POSITIVE_INFINITY;
    for(var i = 0; i <= 3; i++) {
        min = Math.min(min,(nums[nums.length-1-i] - nums[3-i]));
    }
    return min;
};