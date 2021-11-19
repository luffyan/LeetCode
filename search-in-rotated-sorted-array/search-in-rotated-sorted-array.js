/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length-1;
    
    while(start+1 < end) {
        var mid = Math.floor(start + (end-start)/2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > nums[start]) {
            if(target >= nums[start] && target <= nums[mid]) {
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
    if(nums[start] === target) {
        return start;
    }else if(nums[end] === target) {
        return end;
    }else {
        return -1;
    }
    
};