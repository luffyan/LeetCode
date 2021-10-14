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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var first = null, second = null, prev = null;
    function inOrder(node) {
        if (node === null) {
            return;
        }
        inOrder(node.left);
        if (prev && !first && prev.val > node.val) {
            
                first = prev;
            
        }
        if (first && prev.val > node.val) {
            second = node;
        }
        prev = node;
        inOrder(node.right);
    }
    inOrder(root);
    var temp =  first.val;
    first.val = second.val;
    second.val = temp;
    
    return root;
};