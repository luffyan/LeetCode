/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return [];
    var queue = [];
    var result = [];
    
    queue.push(root);
    
    while(queue.length !== 0) {
        //记录当前层有几个元素
        var n = queue.length;
        var temp = [];
        //一口气处理完一层
        while (n > 0) {
            var curr = queue.shift();
            temp.push(curr.val);
            
            if(curr.left !== null) queue.push(curr.left);
            if(curr.right !== null) queue.push(curr.right);
            n--;
        }
        result.push(temp);
    }
    return result;
};