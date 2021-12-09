/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var jumps = 0, currentJumpEnd = 0; farthest = 0;
    for(var i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i+nums[i]);
        if(i === currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;
        }
    }
    return jumps;
  
};