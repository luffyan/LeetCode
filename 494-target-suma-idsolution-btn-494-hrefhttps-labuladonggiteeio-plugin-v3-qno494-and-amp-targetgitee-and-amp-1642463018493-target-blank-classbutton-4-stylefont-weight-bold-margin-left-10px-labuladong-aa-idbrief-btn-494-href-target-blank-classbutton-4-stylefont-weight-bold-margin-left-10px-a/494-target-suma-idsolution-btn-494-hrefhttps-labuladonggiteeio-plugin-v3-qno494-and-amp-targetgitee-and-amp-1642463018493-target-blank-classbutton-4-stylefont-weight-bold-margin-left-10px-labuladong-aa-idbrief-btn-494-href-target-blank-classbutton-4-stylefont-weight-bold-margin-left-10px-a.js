/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    //iterate through the nums array
    //for current number, either add it or subtract it
    
    var count = 0;
    var findTarget = function(sum, currIdx) {
        if(currIdx === nums.length){
            if(sum === target) {
                count++;
            }
            return;
        }
        findTarget(sum + nums[currIdx], currIdx+1);
        findTarget(sum - nums[currIdx], currIdx+1);
    }
    findTarget(0, 0);
    return count;
};