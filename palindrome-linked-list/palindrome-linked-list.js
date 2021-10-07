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
    //copy to array
    var array = [];
    var dummy = head;
    while(dummy != null) {
        array.push(dummy.val);
        dummy = dummy.next;
    }
    //reverse array
    array.reverse();
    //compare the two
    for (var i = 0; i < array.length; i++) {
        if(array[i] !== head.val) {
            return false;
        }
        head = head.next;
    }
    return true;
};