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
var levelOrderBottom = function(root) {
    if(root === null) {
        return [];
    }
    
    var result = [];
    var queue = [];
    
    queue.push(root);
    
    while(queue.length !== 0) {
        var level = [];
        var n = queue.length;
        while(n > 0) {
            var node = queue.shift();
            level.push(node.val);
            if(node.left !== null) {
                queue.push(node.left);
            }
            if(node.right !== null) {
                queue.push(node.right);
            }
            n--;
        }
        result.unshift(level);
    }
    return result;
};