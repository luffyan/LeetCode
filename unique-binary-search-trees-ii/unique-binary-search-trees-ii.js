/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) { 
    
    var generateBSTs = (start, end) => {
        //console.log("start:", start, " end:", end);
        var allTrees = [];
        if(start > end) {
            allTrees.push(null);
            return allTrees;
        }
        
        for(var i = start; i <= end; i++) {
            var left = generateBSTs(start, i-1);
            var right = generateBSTs(i+1, end);
            for (var l of left) {
                for (var r of right) {
                    var currTree = new TreeNode(i);
                    //console.log(i);
                    currTree.left = l;
                    currTree.right = r;
                    allTrees.push(currTree);
                }
            }
        }
        
        return allTrees;
    }
    return generateBSTs(1, n);
  
};