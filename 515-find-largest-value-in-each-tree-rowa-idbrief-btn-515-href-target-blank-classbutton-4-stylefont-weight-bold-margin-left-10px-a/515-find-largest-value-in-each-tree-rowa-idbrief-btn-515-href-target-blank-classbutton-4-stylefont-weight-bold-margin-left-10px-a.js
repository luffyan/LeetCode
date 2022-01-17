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
 * @return {number[]}
 */
var largestValues = function(root) {
    //bfs use queue to store node on the same level
    var result = [];
    var queue = [];
    
    if(root === null) {
        return result;
    }
    queue.push(root);
    while(queue.length !== 0) {
        var len = queue.length;
        var max = Number.MIN_SAFE_INTEGER;
        for(var i = 0; i < len; i++) {
            var currNode = queue.shift();
            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
            max = Math.max(max, currNode.val);
        }
        result.push(max);
    }
    return result;
};