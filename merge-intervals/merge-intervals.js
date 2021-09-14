/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var merged = [];
    intervals.sort((x, y) => x[0] - y[0]);
    
    for (var i = 0; i < intervals.length; i++) {
        if (merged.length === 0 || intervals[i][0] > merged[merged.length-1][1]) {
            merged.push(intervals[i]);
        } else {
            merged[merged.length-1][1] = Math.max(intervals[i][1], merged[merged.length-1][1]);
        }
    }
    return merged;
};