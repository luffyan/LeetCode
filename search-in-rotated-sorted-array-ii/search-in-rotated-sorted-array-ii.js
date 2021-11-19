/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length-1;
    
    while(start + 1 < end) {
        while(start < end) {
            if(nums[start] === nums[start+1]) {
                start++;
            } else break;
        }
        while(start < end) {
            if(nums[end] === nums[end-1]) {
                end--;
            } else break;
        }
        
        var mid = Math.floor(start + (end-start) / 2);
        if(target === nums[mid]) {
            return true;
        } else if(nums[mid] > nums[start]) {// 此处的 >= 不能变为 > ???因为有重复的，如果没有就可以任意切换
            if(target >= nums[start] && target <= nums[mid]){
                end = mid;
            } else {
                start = mid;
            }
        } else if(nums[mid] < nums[end]){
            if(target >= nums[mid] && target <= nums[end]) {
                start = mid;
            } else {
                end = mid;
            }
        }
    }
    return (nums[start] === target) || (nums[end] === target);
};