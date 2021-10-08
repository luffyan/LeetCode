/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    var count = 0;
    var front;
    var curr = head;
    while(curr) {
        count++;
        if(count === k) {
            front = curr;
        }
        curr = curr.next;
    }
    
    var endIdx = 0;
    var end = head;
    while(endIdx < count-k){ //3
        end = end.next;
        endIdx++;
    }
    swap(front, end);
    return head;
};

function swap(front, end) {
    var temp = front.val;
    front.val = end.val;
    end.val = temp;
}