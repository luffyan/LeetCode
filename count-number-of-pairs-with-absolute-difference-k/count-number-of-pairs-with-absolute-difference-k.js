/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    var map = {};
    var count = 0;
    for(var i = nums.length - 1; i >= 0; i--) {
        if(map.hasOwnProperty(nums[i] - k)) {
            count += map[nums[i]-k].length;
        }
        if(map.hasOwnProperty(nums[i] + k)) {
            count += map[nums[i]+k].length;
        }
        if(map.hasOwnProperty(nums[i])) {
            map[nums[i]].push(i);
        } else {
            map[nums[i]] = [i];
        }
    }
    return count;
};

