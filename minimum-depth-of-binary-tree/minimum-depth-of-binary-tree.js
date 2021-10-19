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
var minDepth = function(root) {
    
        // if(!root) {
        //     return 0;
        // }
        // var left = minDepth(root.left);
        // var right = minDepth(root.right);
        // if(!root.left) return right+1;
        // if(!root.right) return left+1;
        // return Math.min(left, right) + 1;
    let depth = 1
    let queue = [root]
    while (queue.length > 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node === null) return 0
            if (node.left === null && node.right === null) return depth
            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
        }
        depth++
    }
    return depth
    
};