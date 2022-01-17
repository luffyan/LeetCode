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
    
    var leftMax = 0; 
    var rightMax = 0;
    var findD = function(root) {
        if(root.left === null && root.right === null) {
            return 0;
        }
        var leftMax = Math.max(leftMax, diameterOfBinaryTree(root.left));
        var rightMax = Math.max(rightMax, diameterOfBinaryTree(root.right));
        return leftMax + rightMax;
    }
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var diameter = 0;
    var findLongestPath = (node) => {
        if(!node) {
            return 0;
        }
        var left = findLongestPath(node.left);
        var right = findLongestPath(node.right);
        diameter = Math.max(left+right, diameter);
        return Math.max(left, right)+1;
    }
    findLongestPath(root);
    return diameter;
};