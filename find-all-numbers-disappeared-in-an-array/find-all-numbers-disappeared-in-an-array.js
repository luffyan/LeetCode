/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var map = {};
    var result = [];
    var n = nums.length;
    for(var i = 1; i <= n; i++) {
        map[i] = 0;
    }
    for(var num of nums) {
        map[num]++;
    }
    for(var key in map) {
        if(map[key] === 0){
            result.push(key);
        }
    }
    return result;
};