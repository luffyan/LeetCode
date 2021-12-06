/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => (a[0]-b[0])); // 从小到大排序，是a-b
    console.log(intervals);

    // use a pq to maintain # of available rooms
    var pq = new MinPriorityQueue();
    
    //add first end time to pq
    pq.enqueue(intervals[0][1]);

    //compare curr start time with first of queue
    for(var i = 1; i < intervals.length; i++) {
        var interval = intervals[i];
        if(interval[0] < pq.front().element) {
            pq.enqueue(interval[1]);
        } else {
            pq.dequeue().element;
            pq.enqueue(interval[1]);
        }
    }

    return pq.size();
}