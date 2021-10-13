/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// var first = null, last = null;
// var treeToDoublyList = function(root) {
//     if (root === null) return null;
//     inOrder(root);
//     first.left = last;
//     last.right = first;
//     return first;
// };

// function inOrder(node) {
//     if (node === null) {
//         return;
//     }
//     inOrder(node.left);
//     if(last !== null) {
//         last.right = node;
//         node.left = last;
//     }
    
//     else {
//         first = node;
//     }
//     last = node;
//     inOrder(node.right);
// }

function treeToDoublyList(root) {
  if (!root) return null;
  const nodes = [];
  dfs(root);
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    node.right = nodes[i + 1];
    node.left = nodes[i - 1];
  }
  nodes[0].left = nodes[nodes.length - 1];
  nodes[nodes.length - 1].right = nodes[0];
  return nodes[0];
  
  function dfs(node) {
    if (!node) { return; }
    dfs(node.left);
    nodes.push(node);
    dfs(node.right);
  }
}