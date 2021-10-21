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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var isMirror = function(node1, node2) {
        if (!node1 && !node2) {
            return true;
        }
        if(!node1 || !node2) {
            return false;
        }
        if (node1.val !== node2.val) {
            return false;
        }
        var child = isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left); 
        return child;
    }
    return isMirror(root, root);
    
};