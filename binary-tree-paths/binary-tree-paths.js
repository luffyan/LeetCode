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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    var findPaths = function(root, path) {
        if(!root) {
            return;
        }
        if(root.left === null && root.right === null) {
            path += root.val;
            result.push(path);
        }
        findPaths(root.left, path+root.val+ '->');
        findPaths(root.right, path+root.val+ '->');
        
    }
    findPaths(root, '');
    return result;
};