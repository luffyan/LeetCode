/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    //for current number, either add it or subtract it
    //不用for loop
    // var count = 0;
    // var findTarget = function(sum, currIdx) {
    //     if(currIdx === nums.length){
    //         if(sum === target) {
    //             count++;
    //         }
    //         return;
    //     } else {
    //         if(memo[sum,currIdx]) {
    //             return
    //         }
    //     }
    //     findTarget(sum + nums[currIdx], currIdx+1);
    //     findTarget(sum - nums[currIdx], currIdx+1);
    // }
    // findTarget(0, 0);
    // return count;
    
    //------------------------------------加memo---------------------------------------
    // var count = 0;
    var memo = {};
    var findCombos = function(sum, idx) {
        var key = sum.toString() + ":" + idx.toString();
        if (key in memo) {
            return memo[key];
        }
        if(idx === nums.length) {
            if(sum === target) {
                return 1;
            }
            return 0;
            // return sum;
        } else {
            var count = findCombos(sum + nums[idx], idx+1) + findCombos(sum - nums[idx], idx+1);
            memo[key] = count;
            return count;
        }
    }
    return findCombos(0, 0);
};