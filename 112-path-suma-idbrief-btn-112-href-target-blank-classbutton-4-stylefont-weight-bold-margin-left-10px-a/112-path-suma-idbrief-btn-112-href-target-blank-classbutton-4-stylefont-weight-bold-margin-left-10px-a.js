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
// maintain 一个sum, 就不用return sum,就可以return true or false
var dfs = function(root, targetSum, sum) {
    if(root === null) {
        return false;
    }
    if(root.left === null && root.right === null) {
        if(targetSum === sum + root.val) {
            return true;
        }
    }
    return dfs(root.left, targetSum, sum + root.val) ||
    dfs(root.right, targetSum, sum + root.val);
}



















// var dfs = (root, targetSum, sum) => {
//     if(root === null) {
//         return false;
//     }
//     if(!root.left && !root.right) {   
//         return sum + root.val === targetSum;
//     } 
//     return dfs(root.left, targetSum, sum + root.val) ||
//        dfs(root.right, targetSum, sum + root.val);
// }

// find all combo of sums
// base case: sum === target

