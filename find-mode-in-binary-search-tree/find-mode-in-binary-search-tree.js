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
 * @return {number[]}
 */


var findMode = function(root) {
    var maxCount = 0;
    var map = {};
    var result = [];
    
    function inOrder(root) {
        if (root === null) {
            return;
        }
        
        inOrder(root.left);
        
        if (map[root.val] === undefined) {
            map[root.val] = 1;
        } else {
            map[root.val]++;
        }
        
        if (map[root.val] === maxCount) {
            result.push(root.val);
        }
        if (map[root.val] > maxCount) {
            maxCount = map[root.val];
            result = [];
            result.push(root.val);
        }
        
        inOrder(root.right);
        
    }
    
    inOrder(root);
    return result;
    
};

