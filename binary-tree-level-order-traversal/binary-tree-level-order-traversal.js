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
    var result = [];
    var postOrder = (node, depth) => {
        if(node === null) {
            return;
        }
        if(result[depth] === undefined) {
            result.push([]);
        }
        result[depth].push(node.val);
        postOrder(node.left, depth+1);
        postOrder(node.right, depth+1);
        
    }
    postOrder(root, 0);
    return result;
};

