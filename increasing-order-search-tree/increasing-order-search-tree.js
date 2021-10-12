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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    var vals = [];
    inorder(root, vals);
    var ans = new TreeNode(0), cur = ans;
    for (var val of vals) {
        cur.right = new TreeNode(val);
        cur = cur.right;
    }
    return ans.right;
}

function inorder(root, vals) {
    if (root === null) return;
    inorder(root.left, vals);
    vals.push(root.val);
    inorder(root.right, vals);
};