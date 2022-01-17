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
    //最长的diameter是一个节点的左右子树最大深度之和
    //就是一个节点的左右子树的最大深度之和。
    var maxDiameter = 0;
    var findDepth = function(node) {
        if(node === null) {
            return 0;
        }
        var left = findDepth(node.left);
        var right = findDepth(node.right);
        
        var diameter = left + right;
        maxDiameter = Math.max(maxDiameter, diameter);
        
        return Math.max(left, right) + 1;
    }
    
    findDepth(root);
    return maxDiameter;
    
    
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