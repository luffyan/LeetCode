/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left = 0; 
    var right = nums.length-1;
    var mid;
    
    // while (left <= right) {
    //     mid = Math.floor((left + right) / 2);
    //     if(nums[mid] < target) {
    //         left = mid+1;
    //     } else if(nums[mid] > target) {
    //         right = mid-1;
    //     } else {
    //         return mid;
    //     }
    // }
    // return -1;
    while(left+1 < right) {
        var mid = Math.floor((left+right)/2);
        if(nums[mid] > target) {
            right = mid;
        } else if(nums[mid] < target) {
            left = mid;
        } else {
            left = mid;
        }
    }
    if(nums[left] === target) {
        return left;
    } else if(nums[right] === target) {
        return right;
    } else {
        return -1;
    }
};