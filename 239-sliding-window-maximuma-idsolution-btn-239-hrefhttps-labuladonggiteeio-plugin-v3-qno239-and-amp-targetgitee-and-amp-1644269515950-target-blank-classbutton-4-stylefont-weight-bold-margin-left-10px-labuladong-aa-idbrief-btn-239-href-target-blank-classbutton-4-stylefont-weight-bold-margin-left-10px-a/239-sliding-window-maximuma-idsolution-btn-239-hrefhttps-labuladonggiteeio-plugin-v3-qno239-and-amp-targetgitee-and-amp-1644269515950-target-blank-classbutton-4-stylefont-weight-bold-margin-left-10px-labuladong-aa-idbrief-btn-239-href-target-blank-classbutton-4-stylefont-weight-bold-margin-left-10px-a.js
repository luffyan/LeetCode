/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    //实现「单调队列」必须使用一种数据结构支持在头部和尾部进行插入和删除，很明显双链表是满足这个条件的。
    
    const n = nums.length;
    const q = [];
    for (let i = 0; i < k; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
    }

    const ans = [nums[q[0]]];
    for (let i = k; i < n; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        while (q[0] <= i - k) {
            q.shift();
        }
        ans.push(nums[q[0]]);
    }
    return ans;
    
}

