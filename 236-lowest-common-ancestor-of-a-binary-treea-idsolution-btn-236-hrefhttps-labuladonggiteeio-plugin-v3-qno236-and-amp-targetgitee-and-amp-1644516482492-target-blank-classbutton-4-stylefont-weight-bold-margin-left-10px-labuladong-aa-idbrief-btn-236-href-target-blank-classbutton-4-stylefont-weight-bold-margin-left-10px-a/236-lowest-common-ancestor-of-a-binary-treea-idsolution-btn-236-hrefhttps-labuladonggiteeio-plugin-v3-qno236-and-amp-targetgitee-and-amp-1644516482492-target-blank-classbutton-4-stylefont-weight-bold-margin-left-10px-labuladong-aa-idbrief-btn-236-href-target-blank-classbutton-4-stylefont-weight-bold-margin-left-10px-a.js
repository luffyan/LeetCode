/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) return null;
    if (root == p || root == q) return root;

    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    // 情况 1
    if (left != null && right != null) {
        return root;
    }
    // 情况 2
    if (left == null && right == null) {
        return null;
    }
    // 情况 3
    return left == null ? right : left;
    
};