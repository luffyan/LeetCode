/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    var order = [];
    //按照时间顺序将任务分给CPU, use array, 将数组中的所有task按照enqueueTime升序排列
    var startOrder = [];
    for(var i = 0; i < tasks.length; i++) {
        if(startOrder[i] === undefined) {
            startOrder[i] = [];
        }
        startOrder[i].push(tasks[i][0]);
        startOrder[i].push(tasks[i][1]);
        startOrder[i].push(i);
    }
    // sort the array based on start time from smallest to largest
    startOrder.sort((a, b) => (a[0] - b[0]));
    
    //选择处理时间最小的任务
    // create a pq to store the available tasks for processing
    // first priority pt, sec idx
    //var pq = new MinPriorityQueue((t1, t2) => (t1[1] === t2[1] ? t1[2] - t2[2] : t1[1] - t2[1]));
    let pq = new MinPriorityQueue({
        priority: ([et, pt, idx]) => pt * 10**5 + idx,
    });
    //enqIdx is the next element to be added to the pq
    var time = 0; resIdx = 0, enqIdx = 0;
    
    for(var i = 0; i < tasks.length; i++) {
        /// 如果没有可以执行的任务，直接快进
        if(pq.size() === 0) {
            time = Math.max(time,startOrder[enqIdx][0]);
            // continue;
        }
        while(enqIdx < tasks.length && startOrder[enqIdx][0] <= time) {
            pq.enqueue(startOrder[enqIdx]);
            enqIdx++;
        }
        var nextTask = pq.dequeue().element;
        order.push(nextTask[2]);
        time += nextTask[1];
    }
    return order;
    
}