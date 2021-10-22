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
var averageOfLevels = function(root) {
    let queue = [];
    queue.push(root);
    const avg = [];
    
    while(queue.length !== 0) {
        let len = queue.length;
        let sum = 0;
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            sum += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        avg.push(sum/len);
    }
    return avg;
};