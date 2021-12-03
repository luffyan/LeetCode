/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [];
    
    if(nums === null || nums.length === 0) {
        return result;
    }
    
    nums = nums.sort();
    
    var findSubset = (list, start) => {
        result.push(list.slice());
        
        for(var i = start; i < nums.length; i++) {
            if(i > start && nums[i] === nums[i-1]) { //
                continue;
            }
            list.push(nums[i]);
            findSubset(list, i+1);
            list.pop();
        }
    }
    
    findSubset([], 0);
    return result;
};

