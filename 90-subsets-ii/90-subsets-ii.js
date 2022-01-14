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
  // 去重复是在这种情况下发生的：
            //以start为startIdx build array的时候不用去重,有重复的也要加上
            //recursion的时候，每次从往后找新的startIdx,所以start >= i
            //但是每次新一个startIdx的时候，新的startIdx数字和之前一样的话要去重
            //start 表示build list start with startIdx
            //只有当每次一个新的i++为start的时候
            if(i != start && nums[i] === nums[i-1]) { 
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

