/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    //写一个二重循环，外层循环枚举子数组的左边界，内层循环枚举子数组的右边界，同时维护当前子数组的最小值和最大值。O(N^2)
    var sum = 0;
    var max = 0, min = 0;
    for(var i = 0; i < nums.length; i++) {
        max = nums[i], min = nums[i];
        for(var j = i+1; j < nums.length; j++) {
            max = Math.max(max, nums[j]);
            min = Math.min(min, nums[j]);
            sum += max - min;
        }
    }
    return sum;
};