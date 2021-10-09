/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    var dummy = new ListNode(-1);
    dummy.next = head;
    var curr = dummy;
   
    // find left
    for (var i = 0; i < left - 1; i++) {
        curr = curr.next;
    
    }
    var prev = curr;
    var leftNode = curr.next;
    // find right
    var rightNode = prev;
    for (var i = 0; i < right-left+1; i++) {
        curr = curr.next;
    }
    var rightNode = curr;
    var tail = curr.next;
    // cut off
    prev.next = null;
    rightNode.next = null;
    //reverse
    reverse(leftNode);
    //splice 
    prev.next = rightNode;
    leftNode.next = tail;
    return dummy.next;
};

function reverse(node) {
    var prev = null
    while(node) {
        var tempNext = node.next;
        node.next = prev;
        prev = node;
        node = tempNext;
    }
}

