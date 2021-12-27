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
    var minHead = null;//minHead记录k个list里面最小的head
    var result = null;
    var tail = null;//一个tail记录result的尾巴
    var count = 0;//count 记录有几个list已经走到头，是null了
    //traverse之前先看看有几个list是null
    for(var list of lists) {
        if(list === null) {
            count++;
        }
    }

    while (count !== lists.length) {
        var idx = -1;//idx记录那个list拥有最小的head
        var min = Number.MAX_VALUE;
        for(var i = 0; i < lists.length; ++i) {
            if(lists[i] && lists[i].val < min) {
                min = lists[i].val;
                minHead = lists[i];
                idx = i;
            }
        }
        lists[idx] = minHead.next;//最小的head的list更新head， 去掉最小值
        minHead.next = null;//断掉最小的head
        if(lists[idx] === null) {
            count++;
        }
        if (result === null) {//result是空的时候，result记录头， tail记录尾巴
            result = minHead;
            tail = minHead;
        } else {
            tail.next = minHead;
            tail = tail.next;
        }
    }
    return result;
};