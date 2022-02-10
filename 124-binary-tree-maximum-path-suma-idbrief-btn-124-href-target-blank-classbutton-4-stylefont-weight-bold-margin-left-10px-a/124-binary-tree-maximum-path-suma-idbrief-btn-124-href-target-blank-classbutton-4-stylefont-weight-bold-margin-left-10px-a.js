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
    //max sum = root value + max of left + max of right
    //postorder traversal, calculate current sum for current node
    //update max sum
    var max = Number.NEGATIVE_INFINITY;
    var findPath = function(node) {
        if(node === null) {
            return 0;
        }
        var left = Math.max(findPath(node.left), 0);
        var right = Math.max(findPath(node.right), 0);
        //max return global max sum
        var currSum = left + right + node.val;
        max = Math.max(currSum, max);
        //recursion function return
        return Math.max(left, right) + node.val;
    }
    findPath(root);
    return max;
};
































/*


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
*/