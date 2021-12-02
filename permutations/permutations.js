/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    var result = [];
    var visited = {};
    
    if(nums === null || nums.length === 0) {
        return result;
    }
    
    var permuteHelper = (list) => {
        if(list.length === nums.length) {
            result.push(list.slice());
            return;
        }
        for(var i = 0; i < nums.length; i++) {
            if(visited[i]) {
                continue;
            }
            
            list.push(nums[i]);
            visited[i] = true;
            permuteHelper(list);
            
            visited[i] = false;
            list.pop();
        }
    }
    permuteHelper([]);
    return result;
};