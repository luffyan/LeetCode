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

var isValidBST = function(root) {
    var prev = null;
    
    var inOrder = function(node) {
    if (node === null) {
        return true;
    }
    if (!inOrder(node.left)) return false;
    if (prev && prev.val >= node.val) {
        return false;
    } 
    prev = node;
    
    return inOrder(node.right);
}
    return inOrder(root);
};

