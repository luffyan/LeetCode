/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var longest = 0;
    
    //create a set, add nums in the set for O(1) access
    var set = new Set();
    for(var i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    
    //
    for(var i = 0; i < nums.length; i++) {
        if(set.has(nums[i] - 1)) {
            continue;
        } else {
            currLen = 1;
            currNum = nums[i]+1;
            while(set.has(currNum)) {
                currLen++;
                currNum++;
            }
            longest = Math.max(currLen, longest);
        }
    }
    return longest;
};