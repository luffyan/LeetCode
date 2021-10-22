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
var maxPathSum = function(root) {
    let max = Number.NEGATIVE_INFINITY;
    const findSum = function (node) {
        if(!node) {
            return 0;
        }
        
        let left = Math.max(findSum(node.left), 0);
        let right = Math.max(findSum(node.right), 0);
        
        let currSum = node.val + left + right;
        max = Math.max(currSum, max);
        
        return node.val + Math.max(left, right);
    }
    findSum(root)
    return max;
};