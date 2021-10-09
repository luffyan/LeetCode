/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
//     var set = new Set();
//     while(headA) {
//             set.add(headA)
//             headA = headA.next;
        
//     }
//     while(headB) {
//         if(set.has(headB)) {
//             return headB;
//         }
//         headB = headB.next;
//     }
//     return null;
    var p1 = headA;
    var p2 = headB;
    
    while(p1 !== p2) {
       
        if (p1 === null) {
            p1 = headB;
        } else {
            p1 = p1.next;
        }
        if (p2 === null) {
            p2 = headA;
        } else {
            p2 = p2.next;
        }
        
        
    }
    return p1;
};