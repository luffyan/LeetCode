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
var swapPairs = function(head) {
    //iterate through the LL in steps of 2
    
    var dummy = new ListNode(-1);
    dummy.next = head;
    var prevNode = dummy;
    while(head && head.next) {
        
        // swap two nodes
        var firstNode = head;
        var secondNode = head.next;
        
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        prevNode.next = secondNode;
        prevNode = firstNode;
        head = firstNode.next;
        
    }
    return dummy.next;
};