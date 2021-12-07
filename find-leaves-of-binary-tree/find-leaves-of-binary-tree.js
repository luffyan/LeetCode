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


//想让如果都是leaves，就都一样的level，
//那就从leave开始count， 就求高度，从下往上

var findLeaves = function(root) {
    var result = [];
    var findHeight = (node) => {
        if(node === null) {
            return -1;
        }
        var left = findHeight(node.left);
        var right = findHeight(node.right);
        
        var height = Math.max(left, right)+1;
        if(!result[height]) {
            result[height] = [];
        } 
        result[height].push(node.val);
        
        return height;
    }
    findHeight(root);
    return result;
    
}

//----------------findDepth-------------------
//depth就是在树是同一个level，大家的depth都一样, 遍历一遍，也不需要return什么
// 还是dfs，但是做出来的是bfs的效果【【1】，【2，3】，【4，5】】
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

// var res = [];
//     var findHeight = (node) => {
//         if(node === null) {
//             return -1;
//         }
       
//         var left = findHeight(node.left);
//         var right = findHeight(node.right);
        
//         var height = Math.max(left, right) + 1;
        
//         if(!res[height]) {
//             res[height] = [];
//         }
//         res[height].push(node.val);
//         return height;
//     }
//     findHeight(root);
//     return res;