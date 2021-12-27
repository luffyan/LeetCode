/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) {
        return null;
    }
    var minHead = null;
    var result = null;
    var tail = null;
    var count = 0;
    for(var list of lists) {
        if(list === null) {
            count++;
        }
    }

    while (count !== lists.length) {
        var idx = -1;
        var min = Number.MAX_VALUE;
        for(var i = 0; i < lists.length; ++i) {
            if(lists[i] && lists[i].val < min) {
                min = lists[i].val;
                minHead = lists[i];
                idx = i;
            }
        }
        lists[idx] = minHead.next;
        if(lists[idx] === null) {
            count++;
        }
        if (result === null) {
            result = new ListNode(minHead.val);
            tail = result;
        } else {
            tail.next = new ListNode(minHead.val);
            tail = tail.next;
        }
    }
    return result;
};