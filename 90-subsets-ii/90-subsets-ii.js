/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// SubsetsII: Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// N*2^N, N, build N subsets for each subsets 2^N combos
var subsetsWithDup = function(nums) {
    var result = [];
    if(nums === null || nums.length === 0) {
        return result;
    }
    nums = nums.sort();
    var findSubset = (list, start) => {
        result.push(list.slice());
        for(var i = start; i < nums.length; i++) {
  // 去重复可省略
            if(i > start && nums[i] === nums[i-1]) { 
                continue;
            }
            list.push(nums[i]);
            findSubset(list, i+1);// use next integer to complete combo
            list.pop();//backtrack
        }
    }
    findSubset([], 0);
    return result;
};

