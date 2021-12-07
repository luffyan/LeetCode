/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    
    if (changed.length % 2) {
        return [];
    }
    var queue = [];
    var res = [];
    changed.sort((a, b) => (a-b));
    for(var num of changed) {
        if(queue.length === 0) {
            queue.push(num);
        } else {
            if(queue[0]*2 === num) {
                res.push(queue[0]);
                queue.shift();
            } else {
                queue.push(num);
            }
        }
    }
    if(queue.length === 0) {
        return res;
    } else {
        return [];
    }
};