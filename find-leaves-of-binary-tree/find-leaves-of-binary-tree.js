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



var findLeaves = function(root) {
    var res = [];
    var findHeight = (node) => {
        if(node === null) {
            return -1;
        }
        if(!node.left && !node.right) {
            
            if(!res[0]) {
                res[0] = [];
            }
            res[0].push(node.val);
            return 0;
        }
       
        var left = findHeight(node.left);
        var right = findHeight(node.right);
        
        var height = Math.max(left, right) + 1;
        
        if(!res[height]) {
            res[height] = [];
        }
        res[height].push(node.val);
        return height;
    }
    findHeight(root);
    return res;
}

//----------------findDepth-------------------
// var findDepth = function(root, depth) {
//     if(root === null) {
//         return;
//     }
//     if(!res[depth]) {
//         res[depth] = [];
//     }
//     res[depth].push(root.val);
//     findDepth(root.left, depth+1);
//     findDepth(root.right, depth+1);
// };