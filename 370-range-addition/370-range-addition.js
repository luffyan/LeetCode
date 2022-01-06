/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    var arr = new Array(length).fill(0);
    for(var update of updates) {
        //from start to end
        var startIdx = update[0];
        var endIdx = update[1];
        var change = update[2];
        for(var i = startIdx; i <= endIdx; i++) {
             arr[i] += change;
        }
    }
    return arr;
};