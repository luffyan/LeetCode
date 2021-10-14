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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    var arr = [];
    function toArray(node) {
        if (node === null) {
            return;
        }
        
        toArray(node.left);
        arr.push(node.val);
        toArray(node.right);
    }
    toArray(root);
    
    function balance(array) {
        console.log(array);
        if (array.length === 0) {
            return null;
        }
        if(array.length === 1) {
            return new TreeNode(array[0]);
        }
        var midIdx = Math.floor(array.length/2);
        var balanceTreeRoot = new TreeNode(array[midIdx]);
        console.log("mid: ", array[midIdx]);
        console.log("left: ", array.slice(0, midIdx));
        console.log("right: ", array.slice(midIdx+1));
        balanceTreeRoot.left = balance(array.slice(0, midIdx));
        console.log("right b: ", array.slice(midIdx+1), " midIdx:", midIdx);
        balanceTreeRoot.right = balance(array.slice(midIdx+1));
        return balanceTreeRoot;
    }
    return balance(arr);
    
};