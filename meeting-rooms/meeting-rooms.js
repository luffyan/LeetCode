/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if(intervals.length === 0) {
        return true;
    }
    
    intervals.sort((a, b) => (a[0] - b[0]));
    
    for(var i = 1; i < intervals.length; i++) {
        //curr start time is larger than or equal to last meeting's end time
        var curr = intervals[i];
        if(curr[0] < intervals[i-1][1]) {
            return false;
        }
    }
    return true;
};