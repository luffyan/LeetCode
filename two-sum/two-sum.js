/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var curr = nums[i];
        var x = target - curr;
        if (x in map) {
            return [i, map[x]];
        }
        map[curr] = i; 
    }
    
};