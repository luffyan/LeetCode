/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    
    while(start+1 < end) {
        var mid = Math.floor(start + (end-start)/2);
        
        if(nums[mid] <= nums[end]) {
            end = mid;
        } else {
            start = mid;
        }
    }
    return Math.min(nums[start], nums[end]);
};