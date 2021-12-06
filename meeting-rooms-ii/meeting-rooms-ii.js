/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    var start = [];
    var end = [];
    var i = 0;
    var j = 0;
    
    var count = 0;
    var result = 0;
    for(var interval of intervals) {
        start.push(interval[0]);
        end.push(interval[1]);
    }
    
    start.sort((a,b) =>a-b);
    end.sort((a,b) =>a-b);

    while(i < start.length){
		if(start[i] < end[j]){
			count++
			i++
		}else{
			j++
			count--
		}
		result=Math.max(count,result)
	}

	return result
};