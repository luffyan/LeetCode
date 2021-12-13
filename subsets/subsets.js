/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Input: nums = [1,2,3]  
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//N* 2^N, N, build N number of substes, each subset has2^n combos
var subsets = function(nums) {
    var result = [];
    if(nums === null || nums.length === 0 ){
        return result;
    }
    var findSubsets = (list, start) => {
        result.push(list.slice());//别忘了slice
        for(var i = start ; i < nums.length; i++) {// i = start not 0!!! use start to control you keep choosing the next element to add to your list
            list.push(nums[i]);
            findSubsets(list, i+1);
            list.pop();
        }
    }
    
    findSubsets([], 0);
    return result;
};


