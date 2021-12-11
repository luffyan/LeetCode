/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(intervals.length === 0 || intervals === null) {
        return 0;
    }
    //sort the meetings based on their start time
    intervals.sort((a, b) => (a[0] - b[0]));
    //iterate through the sorted array, compare the curr start time with the meeting that's end earliest
    var pq = new MinPriorityQueue();
    pq.enqueue(intervals[0][1]);
    
    for(var i = 1; i < intervals.length; i++) {
        var curr = intervals[i];
        if(curr[0] >= pq.front().element) {
            pq.dequeue();
            pq.enqueue(curr[1]);
        } else {
            pq.enqueue(curr[1]);
        }
    }
    return pq.size();
    // use a priority queue to store the meeting end times
    
    //if start time > meeting end times
    //pop out the meeting that ends from the pq, add new end time(curr) to the pq

    //else add new end time to pq
    
    // return the size of pq
}
//     intervals.sort((a,b) => (a[0]-b[0])); // 从小到大排序，是a-b
//     console.log(intervals);

//     // use a pq to maintain # of available rooms
//     var pq = new MinPriorityQueue();
    
//     //add first end time to pq
//     pq.enqueue(intervals[0][1]);

//     //compare curr start time with first of queue
//     for(var i = 1; i < intervals.length; i++) {
//         var interval = intervals[i];
//         if(interval[0] < pq.front().element) {
//             pq.enqueue(interval[1]);
//         } else {
//             pq.dequeue().element;
//             pq.enqueue(interval[1]);
//         }
//     }

//     return pq.size();