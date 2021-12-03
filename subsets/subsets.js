/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [];
    
    if(nums === null || nums.length === 0 ){
        return result;
    }
    
    var findSubsets = (list, start) => {
        result.push(list.slice());
        
        for(var i = start ; i < nums.length; i++) {// i = start not 0!!! use start to control you keep choosing the next element to add to your list
            list.push(nums[i]);
            findSubsets(list, i+1);
            list.pop();
        }
    }
    
    findSubsets([], 0);
    return result;
};


