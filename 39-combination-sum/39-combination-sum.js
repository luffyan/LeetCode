/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    var findCombos = function(sum, list, start) {
        if(sum === target) {
            result.push(list.slice());
        }
        if(sum > target) {
            return;
        }
        for(var i = start; i < candidates.length; i++) {
            list.push(candidates[i]);
            findCombos(sum+candidates[i],list, i);
            list.pop();
        }
    }
    findCombos(0, [], 0);
    return result;
};