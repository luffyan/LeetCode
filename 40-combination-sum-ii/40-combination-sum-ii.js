/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    //build a list
    //start from current number
    //var start index to keep track of starting point
    //var sum => current sum
    //base case1 = target
    //base case2 > target
    candidates.sort();
    var result = [];
    
    var findCombos = function(sum, start, list) {
        if(sum === target) {
            result.push(list.slice());
            return;
        }
        if(sum > target) {
            return;
        }
        for(var i = start; i < candidates.length; i++) {
            if(i > start && candidates[i] === candidates[i-1]) continue;
            list.push(candidates[i]);
            findCombos(sum+candidates[i], i+1, list);
            list.pop(candidates[i]);
        }
    }
    findCombos(0, 0, []);
    return result;
};