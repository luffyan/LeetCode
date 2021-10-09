/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(-1);
    var curr = dummy;
    var carry = 0;
    
    while(l1 || l2) {
        var x = l1 ? l1.val : 0;
        var y = l2 ? l2.val : 0;
        var add = x + y + carry;
        
        add > 9 ? carry = 1 : carry = 0;
        curr.next = new ListNode(add % 10);
        
        l1 ? l1 = l1.next : null;
        l2 ? l2 = l2.next : null;
        curr = curr.next;
        
    }
    
    if(carry > 0) {
        curr.next = new ListNode(1);
    }
    
    return dummy.next;
};