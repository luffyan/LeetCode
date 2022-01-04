/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    //heap solution
    //push all pairs into a max heap
    // if size > k, pop
    // after building the heap, there are k elements, return head of heap
    var heap = new MaxPriorityQueue();
    for(var i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            //add a pair to heap
            heap.enqueue(i);
            if(heap.size() > k) {
                heap.dequeue().element;
            }
            if(i !== n/i){
                heap.enqueue(n/i);
            }
            if(heap.size() > k) {
                heap.dequeue().element;
            }
        }
    }
    if (heap.size() < k) return -1;
    return heap.dequeue().element;
    //Math solution
    //如果k <  sqrt(N), 直接返回
    //else k > sqrt(N), k--之后找到的是k-sqrt(n)也就是说，k到sqrt(N)直接的距离
    //以sqrt(N)为镜面中点，翻转一下（sqrt(n) - k）就是要找的N除以的存在数组里的数了
};