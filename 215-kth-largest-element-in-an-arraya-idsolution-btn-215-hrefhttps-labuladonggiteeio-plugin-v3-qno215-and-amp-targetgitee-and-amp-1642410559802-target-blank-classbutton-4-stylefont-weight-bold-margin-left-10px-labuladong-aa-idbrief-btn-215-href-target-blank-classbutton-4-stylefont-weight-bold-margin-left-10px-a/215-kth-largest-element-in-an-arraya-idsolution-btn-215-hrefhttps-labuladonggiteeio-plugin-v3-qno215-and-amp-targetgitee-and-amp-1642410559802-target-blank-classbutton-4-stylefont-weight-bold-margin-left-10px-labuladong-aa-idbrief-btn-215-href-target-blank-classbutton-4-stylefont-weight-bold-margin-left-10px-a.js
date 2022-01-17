/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // nums.sort((a, b) => (b-a));
    // return nums[k-1];
    //use a max pq to maintain a k elements array
    
    var pq = new MinPriorityQueue();
    for(var num of nums) {
        if(pq.size() < k || pq.front().element < num) {
            pq.enqueue(num);
        }
        
        if(pq.size() > k) {
            pq.dequeue().element;
        }
    }
    
    return pq.front().element;
};