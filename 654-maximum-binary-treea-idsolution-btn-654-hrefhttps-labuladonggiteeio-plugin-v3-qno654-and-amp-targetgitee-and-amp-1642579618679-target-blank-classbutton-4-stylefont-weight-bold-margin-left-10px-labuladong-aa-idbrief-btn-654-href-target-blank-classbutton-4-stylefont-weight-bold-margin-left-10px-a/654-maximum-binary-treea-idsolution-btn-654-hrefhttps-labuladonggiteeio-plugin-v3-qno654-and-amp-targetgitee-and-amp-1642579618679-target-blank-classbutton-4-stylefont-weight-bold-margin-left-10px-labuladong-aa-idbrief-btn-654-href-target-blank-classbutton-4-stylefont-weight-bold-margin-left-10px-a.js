/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {

    var constructTree = function(start, end) {
        if(start > end) {
            return null;
        }
        var rootVal = -1;
        var rootIdx = -1;
        for(var i = start; i <= end; i++) {
            if(nums[i] > rootVal) {
                rootVal = nums[i];
                rootIdx = i;
            }
        }
        var root = new TreeNode(rootVal);

        root.left = constructTree(start, rootIdx-1);
        root.right = constructTree(rootIdx+1, end);
        return root;
    }
    return constructTree(0, nums.length-1);
};