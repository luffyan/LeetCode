/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var count = 0;
    var current = head;
    var result = head;
    while (current && current.next != null) {
        count++;
        current = current.next;
    }
    var mid = Math.ceil(count/2) ;
    
    for (var i = 0; i < mid; i++) {
        result = result.next;
    }
    return result;
};