/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // // copy to array
    // var array = [];
    // var dummy = head;
    // while(dummy != null) {
    //     array.push(dummy.val);
    //     dummy = dummy.next;
    // }
    // //reverse array
    // array.reverse();
    // //compare the two
    // for (var i = 0; i < array.length; i++) {
    //     if(array[i] !== head.val) {
    //         return false;
    //     }
    //     head = head.next;
    // }
    // return true;
    
    var endOfFirstHalf = findMid(head);
    console.log(endOfFirstHalf);
    var startOfSecHalf = reverse(endOfFirstHalf.next);
    console.log(startOfSecHalf);
    var p1 = head;
    var p2 = startOfSecHalf;
    while(p1 && p2) {
        if (p1.val !== p2.val) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    return true;
};

function findMid(node) {
    var fast = node;
    var slow = node;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;  
    }
    return slow;
}

function reverse(node) {
    var curr = node;
    var prev = null;
   
    while(curr) {
        var tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }
    return prev;
}