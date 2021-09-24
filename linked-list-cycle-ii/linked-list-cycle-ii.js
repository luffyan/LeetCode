/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var count = new Set();
    
    while (head !== null) {
        // count[head] ? count[head]++ : count[head] = 1;
       console.log(head.val);
       console.log(count[head]);
        if (count.has(head)) {
            return head;
        }
        count.add(head);
        head = head.next;
    }
    return null;
};