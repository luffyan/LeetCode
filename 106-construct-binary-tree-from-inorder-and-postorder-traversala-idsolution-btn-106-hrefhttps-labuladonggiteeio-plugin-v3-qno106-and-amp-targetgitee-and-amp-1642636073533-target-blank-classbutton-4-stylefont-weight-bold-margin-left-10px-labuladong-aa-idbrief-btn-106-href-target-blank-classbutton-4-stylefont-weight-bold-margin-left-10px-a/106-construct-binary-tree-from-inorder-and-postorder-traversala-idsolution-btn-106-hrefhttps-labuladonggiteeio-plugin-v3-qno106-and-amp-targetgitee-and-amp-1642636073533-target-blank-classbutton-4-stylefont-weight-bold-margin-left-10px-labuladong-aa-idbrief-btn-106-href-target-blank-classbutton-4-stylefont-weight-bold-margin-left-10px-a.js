/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    //find the root, create a root node
    //recursively build left child and right child
    //base case is start > end
    
    var build = function(inStart, inEnd, postStart, postEnd) {
        if(inStart > inEnd) {
            return null;
        }
        var rootVal = postorder[postEnd];
        var rootIdx = inorder.indexOf(rootVal);
        
        var root = new TreeNode(rootVal);
        var leftSize = rootIdx - inStart;
        root.left = build(inStart, rootIdx-1, postStart, postStart+leftSize-1);
        root.right = build(rootIdx+1, inEnd, postStart+leftSize, postEnd-1);
        return root;
    }
    return build(0, inorder.length-1, 0, postorder.length-1);
};