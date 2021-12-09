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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return dfs(root, targetSum, 0);
};

var dfs = (root, targetSum, sum) => {
    if(root === null) {
        return false;
    }
    if(!root.left && !root.right) {   
        return sum + root.val === targetSum;
    } 
    return dfs(root.left, targetSum, sum + root.val) ||
       dfs(root.right, targetSum, sum + root.val);
}

// find all combo of sums
// base case: sum === target

