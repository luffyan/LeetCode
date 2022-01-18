/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //to build a tree, find root, build left child and right child
    //preorder: root left right
    //inorder: left root right
    //find indexes to build left and right child
    
    var build = function(preStart, preEnd, inStart, inEnd) {
        if(preStart > preEnd) {
            return null;
        }
        var rootVal = preorder[preStart];
        var root = new TreeNode(rootVal);
        
        var rootIdx = inorder.indexOf(rootVal);
        root.left = build(preStart+1, preStart+rootIdx-inStart, inStart, rootIdx-1);
        root.right = build(preStart+rootIdx-inStart+1, preEnd, rootIdx+1, inEnd);
        return root;
    }
    return build(0, preorder.length-1, 0, inorder.length-1);
};