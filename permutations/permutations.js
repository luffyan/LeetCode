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
    
    var findPermute = (list) => {
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
            
            findPermute(list);
            
            list.pop();
            visited[i] = undefined;
        }
    }
    
    findPermute([]);
    return result;
};

 