/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //sort 
    //add first interval to result
    //iterate through intervals
    //for current interval, 
        //if start is smaller than or equal to end of last interval in the result
        //we need to merge, update end time to be larger end
        // else if larger, add to result
    
    
    intervals.sort((a, b) => (a[0] - b[0]));
    var result = [];
    result.push(intervals[0]);
    for(var i = 1; i < intervals.length; i++) {
        var curr = intervals[i];
        if(curr[0] <= result[result.length-1][1]) {
            //merge
            result[result.length-1][1] = Math.max(result[result.length-1][1], curr[1]);
        } else {
            result.push(curr);
        }
    }
    return result;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     var merged = [];
//     intervals.sort((x, y) => x[0] - y[0]);
    
//     for (var interval of intervals) {
//         if (merged.length === 0 || interval[0] > merged[merged.length-1][1]) {
//             merged.push(interval);
//         } else {
//             merged[merged.length-1][1] = Math.max(interval[1], merged[merged.length-1][1]);
//         }
//     }
//     return merged;
};