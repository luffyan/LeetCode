/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
// Permutation: Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// with map, N* permutation#, where permutation P(n,r) = n!/(n - r)!, O(N)
var permute = function(nums) {
    var result = [];
    var visited = {};// remove duplicates
    if(nums === null || nums.length === 0) {
        return result;
    }
    var findPermute = (list) => {
        //就像list要一个deep copy一样，
        //visited 每次recursion也会清零
        //因为iteration的时候，一个push + 一个pop，就归零了
        if(list.length === nums.length) {
            result.push(list.slice()); // push a copy of the list
            return;
        }
        for(var i = 0; i < nums.length; i++) {
            if(visited[i]) {
                continue;
            }
            list.push(nums[i]); 
            visited[i] = true; // starting from i, find all permutations, for each new item, search from index 0
            findPermute(list);
            //remove current item
            list.pop();
            visited[i] = undefined;
        }
    }
    
    findPermute([]);
    return result;
};

 