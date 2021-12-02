/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [];
    
    if(nums === null || nums.length === 0) {
        return result;
    }
    
    nums = nums.sort(); // remember to sort
    var subsetsHelper = (pos, subset) => {
        result.push(subset.slice()); // remember to make a deep copy, subset.slice()
        
        //iterate through the array, find all combos starting with number at idx i;
        for(var i = pos; i < nums.length; i++) {
            if(i !== pos && nums[i] === nums[i-1]) {
                continue;
            }
            subset.push(nums[i]);
            subsetsHelper(i+1, subset);
            subset.pop();
            
        }
    }
    
    subsetsHelper(0, []);
    return result;
};

