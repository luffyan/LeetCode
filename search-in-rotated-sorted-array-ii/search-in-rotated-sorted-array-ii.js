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
        } else if(nums[mid] >= nums[start]) {
            if(target >= nums[start] && target <= nums[mid]){
                end = mid;
            } else {
                start = mid;
            }
        } else {
            if(target >= nums[mid] && target <= nums[end]) {
                start = mid;
            } else {
                end = mid;
            }
        }
    }
    return (nums[start] === target) || (nums[end] === target);
};