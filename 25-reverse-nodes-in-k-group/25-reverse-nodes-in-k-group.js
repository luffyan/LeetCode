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
var reverseKGroup = function(head, k) {
    var curr = head;
    var ktail = null;
    
    var new_head = null;
    
    while(curr) {
        var count = 0;
        curr = head;//?
        while(count < k && curr) {
            curr = curr.next;
            count++;
        }
        
        if(count >= k) {
            var revHead = reverseKNodes(head, k);
            if(new_head === null) {
                new_head = revHead;
            }
            
            if(ktail !== null) {
                ktail.next = revHead;
            }
            
            ktail = head;
            head = curr;
        }
    }
    if(ktail !== null) {
        ktail.next = head;
    }
    return new_head === null ? head : new_head;
};

var reverseKNodes = function(head, k) {
    //reverse k nodes of the given linked list
    //assumes list contains at least k node, otherwise return null
    if(k < 2) {
        return head;
    }
    var prev = new ListNode(-1, null);
    var current = head;
    
    while(k > 0) {
        //temp store next node
        var next = current.next;
        //reverse
        current.next = prev;
        //update
        prev = current;
        current = next;
        k--;
    }
    //return the head of the reversed list
    return prev;
}