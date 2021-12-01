/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [];
    var backtrack = (nums, pos, list) => {
        result.push(list.slice());

        for(var i = pos; i < nums.length; i++) {
            list.push(nums[i]);
            backtrack(nums, i+1, list);
            list.pop();
        }
    }
    backtrack(nums, 0, []);
    return result;
};
