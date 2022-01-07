/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    //pq based on meeting end time
    //if a new meeting starts after the top queue meeting ends
        //pop out ended meeting, add new meeting, they don't account for extra count in the queue
    //else add new meeting into the queue bc that new meeting will take an extra room
    //return the size of the queue
    intervals.sort((a, b) => (a[0] - b[0]));
    var pq = new MinPriorityQueue();
    
    pq.enqueue(intervals[0][1]);
    
    for(var i = 1; i < intervals.length; i++) {
        if(intervals[i][0] >= pq.front().element) {
            pq.dequeue();
            pq.enqueue(intervals[i][1]);
        } else {
            pq.enqueue(intervals[i][1]);
        }
    }
    
    return pq.size();
    
    

    
//     if(intervals.length === 0 || intervals === null) {
//         return 0;
//     }
//     //sort the meetings based on their start time
//     intervals.sort((a, b) => (a[0] - b[0]));
//     //iterate through the sorted array, compare the curr start time with the meeting that's end earliest
//     var pq = new MinPriorityQueue();
//     pq.enqueue(intervals[0][1]);
    
//     for(var i = 1; i < intervals.length; i++) {
//         var curr = intervals[i];
//         if(curr[0] >= pq.front().element) {//front.element
//             pq.dequeue();
//             pq.enqueue(curr[1]);
//         } else {
//             pq.enqueue(curr[1]);
//         }
//     }
//     return pq.size(); // size不是length
}
