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
 * @return {number}
 */
var maxDepth = function(root) {
    
    var bfs = function(node) {
        if (node === null) {
            return 0;
        }
        
        var left = bfs(node.left);
        var right = bfs(node.right);
        return Math.max(left, right) + 1;
    }
    return bfs(root, 0);
    
};