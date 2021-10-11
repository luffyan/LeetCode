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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    return rangeSum(root, low, high, 0);
};

function rangeSum(root, low, high, sum) {
    if (root === null) {
            return sum;
    }
    if (root.val >= low && root.val <= high) {
        sum += root.val;
        sum = rangeSum(root.left, low, high, sum);
        sum = rangeSum(root.right, low, high, sum);
        
    } else if (root.val < low) {
        sum = rangeSum(root.right, low, high, sum);
    } else if (root.val > high) {
        sum = rangeSum(root.left, low, high, sum);
    }
    
    return sum;
    
}