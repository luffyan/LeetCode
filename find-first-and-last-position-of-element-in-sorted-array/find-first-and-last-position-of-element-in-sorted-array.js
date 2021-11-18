/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // find the first appearance of the target if target exists
    var result = [];
    var start = 0;
    var end = nums.length-1;
    while(start+1 < end) {
        var mid = Math.floor(start + (end-start)/2);
        if (nums[mid] >= target) {//keep looking to the left
            end = mid;
        } else {
            start = mid;
        }
    }
    if (nums[start] === target) {
        result[0] = start;
    }else if(nums[end] === target) {
        result[0] = end;
    }else{
        result[0] = -1;
        result[1] = -1;
        return result;
    }
    // find second appearance of the target if target exists
     var start = 0;
    var end = nums.length-1;
    while(start+1 < end) {
        var mid = Math.floor(start + (end-start) / 2);
        if(nums[mid] > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    if(nums[end] === target) {
        result[1] = end;
    } else if(nums[start] === target) {
        result[1] = start;
    }
    return result;
};