/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    var value = head.val;
    var curr = head;
    while(curr.next != null) {
        curr = curr.next;
        value = value * 2 + curr.val;
        
    }
    return value;
};