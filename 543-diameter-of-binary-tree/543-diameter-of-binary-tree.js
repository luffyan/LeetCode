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
var diameterOfBinaryTree = function(root) {
    
    // traverse tree, find diameter for each node
    // update max diameter
    var max = 0;
    var traverse = function (node) {
        if(node === null) {
            return;
        }

        var left = maxDepth(node.left);
        var right = maxDepth(node.right);
        var diameter = left + right + 2;
        max = Math.max(max, diameter);
        traverse(node.left);
        traverse(node.right);
    }
    var maxDepth = function(node) {
        if(node === null) {
            return -1;
        }
        var left = maxDepth(node.left);
        var right = maxDepth(node.right);
        return Math.max(left, right) + 1;
    }
    traverse(root);
    return max;
    
    
    
    // var diameter = 0;
    // var findLongestPath = (node) => {
    //     if(!node) {
    //         return 0;
    //     }
    //     var left = findLongestPath(node.left);
    //     var right = findLongestPath(node.right);
    //     diameter = Math.max(left+right, diameter);
    //     return Math.max(left, right)+1;
    // }
    // findLongestPath(root);
    // return diameter;
};