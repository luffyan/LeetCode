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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var levels = [];
    function bfs(node, level) {
        if (node === null) return;
        
        // if(levels.length === 0) {
        //     levels[level] = [];
        // }
        
        // If there is no array for the specified index, then create an empty array
    levels[level] = levels[level] || [];
	// Push value to the array for the specified index
    levels[level].push(node.val);
        
        if(node.left) bfs(node.left, level+1);
        if(node.right) bfs(node.right, level+1);
    }
    bfs(root, 0);
    return levels;
};