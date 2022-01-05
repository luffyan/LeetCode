/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    //[14,11,12,13]
    //store in a min pq
    //[11,12,13,14]
    //pop out the smallest two, add them up to be current cost
    //update total cost
    //add the current cost back into pq
    var pq = new MinPriorityQueue();
    var totalCost = 0;
    var currCost = 0;
    for(var stick of sticks) {
        pq.enqueue(stick);
    }
    
    while(pq.size() >= 2) {
        currCost = pq.dequeue().element + pq.dequeue().element;
        totalCost += currCost;
        pq.enqueue(currCost);
    } 
    return totalCost;
    
};